import Markdown from 'react-markdown'

// https://dev.to/jameswallis/how-to-use-the-remark-markdown-converters-with-next-js-projects-a8a

const markdown = `
# Aktivere Feide

Hvis Feide ikke er aktivert for skolen/kommunen må IT-ansvarlig gjøre dette. Send Fagfilm en email om det trengs en databehandleravtale.
Send til: [admin@fagfilm.no](mailto:admin@fagfilm.no)
`;

const BliBruker = async () => {



  return (
    <article className="prose prose-invert">
     <Markdown className="">{markdown}</Markdown>
    </article>
  )
}

export default BliBruker