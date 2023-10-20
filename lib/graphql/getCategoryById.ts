import {Sha256} from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@smithy/signature-v4';
import { HttpRequest } from '@smithy/protocol-http';
import { CategoryQuery } from './queries'
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY as string
const AWS_REGION = process.env.AWS_REGION as string

export const getCategoryById = async (id: string) => {

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
      query: CategoryQuery,
      variables: { id }
    }), // Query string should be in the body
    path: endpoint.pathname
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(GRAPHQL_ENDPOINT, signed);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    console.log(body)
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
  // const category = body.data.getCategory
  return {} //category
};