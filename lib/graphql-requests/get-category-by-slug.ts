import {Sha256} from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@smithy/signature-v4';
import { HttpRequest } from '@smithy/protocol-http';
import { CategoryBySlugQuery } from './queries'
import { CategoriesQuery } from './queries'

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY as string
const AWS_REGION = process.env.AWS_REGION as string


const getCategoryBySlug = async (categorySlug: string) => {
  const encodedSlug = encodeURIComponent(categorySlug);
  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });


  const requestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host
    },
    hostname: endpoint.host,
    body: JSON.stringify({
      query: CategoryBySlugQuery,
      variables: {slug: categorySlug}
    }), // Query string should be in the body
    path: endpoint.pathname
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(GRAPHQL_ENDPOINT, signed);

  let statusCode = 200;
  let body;
  let response;

  try {
    // console.log('request', request)
    response = await fetch(request);
    body = await response.json();
    // console.log('body length: ',body.data?.listCategorys.items.length)
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: JSON.stringify(error)
        }
      ]
    };
  }
  const category = body.data?.listCategorys.items[0]
  return category
};

export default getCategoryBySlug