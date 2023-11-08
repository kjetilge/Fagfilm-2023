import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'

// https://dev.to/jameswallis/how-to-use-the-remark-markdown-converters-with-next-js-projects-a8a

const markdown = `
# Bli bruker

**Foreløpig** har de nye sidene kun innlogging med Feide. Det betyr at du ikke trenger å gjøre noe for å bli bruker. Du logger bare inn med 
Feide og får tilgang til alt innholdet. Dette forutsetter at skolen din har kjøpt lisens og at:

1. Du må ha en Feide-bruker for å kunne logge inn.
2. Skolen må ha [innført Feide-innlogging](https://www.feide.no/innforing-av-feide) samt ha [aktivert fagfilm tjenesten](https://www.feide.no/kundeportalen#tjenester) i [Feide kundeportal](kunde.feide.no)
`;

const BliBruker = async () => {



  return (
    <article className="prose prose-invert">
     <Markdown remarkPlugins={[[ rehypeExternalLinks,  {target: ['_blank']} ]]} className="">{markdown}</Markdown>
    </article>
  )
}

export default BliBruker