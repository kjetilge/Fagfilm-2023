import Markdown from 'react-markdown'

const markdown = `
# Bestill fagfilm

**For** bestilling, kontakt fagfilm på: 22 57 15 00
Åpent 08:00 - 21:00
`;

const BliBruker = () => {
  return (
    <article className="prose prose-invert">
     <Markdown className="">{markdown}</Markdown>
    </article>
  )
}

export default BliBruker