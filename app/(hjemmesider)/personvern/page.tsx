'use client'
import { useCollapse } from 'react-collapsed'
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';
import { useState } from 'react';

const privacyPoints = [
  {
    title: 'Hvilke opplysninger vi har om deg',
    content: `
      <div className="mb-4"> 
        <h4 className="text-orange-950">Opplysninger som gis av deg</h4>
        <p>Når du melder deg på Fagfilm som bruker registrerer vi din epostadresse og hvilken skole/institusjon du tilhører (ved hjelp av skolekoden)</p>
        <h4>Opplysninger som samles inn om deg</h4>
        <p>Når du logger inn registerer vi <b>datoen for siste innlogging.</b> Er du kontaktperson hos lisensholder (skolen) har vi også fått ditt <b>fulle navn</b> og <b>jobb-epostadresse</b> når vi har kontaktet deg gjennom å ringe skolens hovednummer. Hvis du skal bruke Fagfilm kan innsamling av disse opplysningene ikke velges bort.</p>
      </div>
    `,
  },
  {
    title: 'Hva vi bruker opplysningene til (formål)',
    content: `
      <div style="text-align: left">
        <ol>
          <li><b>Sende deg en epost for å verifisere at din epostadresse er riktig.</b> For dette formålet bruker vi din epostadresse.</li>
          <li><b>For å verifisere at du kan bruke skolens/institusjonens lisens.</b> For dette formålet bruker vi skolekoden som er knyttet til din epostadresse når du logger inn.</li>
          <li><b>For nullstilling av passord.</b> For dette formålet benyttes din epostadresse.</li>
          <li><b>For produktinformasjon og kundeoppfølging.</b> Dersom du er kontaktperson hos lisensholder benyttes din epostadresse til å sende deg informasjon om bruk av tjenesten og om nytt tilgjengelig innhold samt endring av innhold.</li>
          <li><b>For sletting av bruker.</b> For dette formålet bruker vi datoen for siste innlogging.</li>
          <li><b>Vi deler ikke personopplysninger med andre</b></li>
        </ol>
      </div>
    `,
  },
  {
    title: 'Hvor lenge lagrer vi opplysningene',
    content: `
      <p>
        Vi lagrer opplysningene kun så lenge det er nødvendig. Dette innebærer at vi sletter automatisk: Din brukerkonto og dato for siste innlogging innen 6 måneder etter siste innlogging.
      </p>
    `,
  },
  {
    title: 'Dine personvernrettigheter',
    content: `
      <p>Du har en rekke personvernrettigheter. Disse kan du benytte deg av ved å ta kontakt med oss. Dine rettigheter omfatter:</p>
      <ol style="text-align: left">
        <li><b>Informasjon.</b> Ytterligere informasjon om hvordan vi behandler opplysninger om deg.</li>
        <li><b>innsyn.</b>  Kopi av opplysninger vi har om deg.</li>
        <li><b>Korrigering.</b>  Rette og supplere opplysninger om deg</li>
        <li><b>Sletting.</b>  Be om sletting av opplysninger som vi ikke lenger har grunnlag for å oppbevare.</li>
        <li><b>Begrensning.</b>  Be om at vi begrenser bruken av dine opplysninger.</li>
        <li>Dataportabilitet. Be om at dine opplysninger overføres til deg eller til en annen virksomhet i et strukturert, alminnelig anvendt og maskinlesbart format.</li>
        <li>Be om å motsette deg vår bruk av dine opplysninger for direkte markedsføring, inkludert profilering. Du kan også motsette deg å være gjenstand for individuelle avgjørelser av rettslig karakter som utelukkende er automatisert.</li>
      </ol>
      <p>Innsigelse. Be om å motsette deg vår bruk av dine opplysninger for direkte markedsføring, inkludert pr</p>
      <p>Hvis du mener at vi behandler personopplysninger urettmessig, har du rett til å klage til Datatilsynet. Vi håper at du først tar kontakt med oss, slik at vi kan vurdere dine innsigelser og oppklare eventuelle misforståelser.</p>
    `,
  },
  {
    title: 'Databehandlere og datasikkerhet',
    content: `
      <p>
        Fagfilm benytter kun databehandlere (skytjenester) som lagrer data innenfor EU/EØS.
        All data som ligger i ro er kryptert og våre hjemmesider benytter kryptert
        informasjonsoverføring via https. Vi benytter to-faktor-autentisering ved innlogging til databehandlere.
      </p>
    `,
  },
  // Add more privacy points as needed
];

const PrivacyPage = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  const [open, setOpen] = useState(false);
  return (
    <div className="p-20 flex items-center">
    <article  className="prose prose-sm md:prose-lg lg:prose-xl max-w-none">
      
      <h1 className="text-center text-5xl mb-3">Personvernerklæring</h1>
      <p className="">
        Fagfilm.no driftes av Pareto Film AS. Vi er behandlingsansvarlig og har ansvaret for at
        opplysningene som vi har om deg brukes i tråd med personvernlovgivningen.

        I denne personvernerklæringen gir vi deg informasjon om hvordan vi bruker og beskytter dine
        personopplysninger og hvilke rettigheter du har. Personopplysninger er alle opplysninger
        som kan knyttes til deg som enkeltperson.
      </p>
      <Collapsible.Root className="w-full" open={open} onOpenChange={setOpen}>

        <section className="border-solid border-[1px] border-neutral-300 rounded p-4 mb-4">
          <Collapsible.Trigger asChild>
            <button className="flex justify-between w-full">
              <h2 className="m-0 md:m-0 lg:m-0">Hvilke opplysninger vi har om deg</h2>
              <div className="pt-2 md:pt-3 ">{open ? <Cross2Icon /> : <RowSpacingIcon />}</div>
            </button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="mt-1">
              <h3 className="text-xl">Opplysninger som gis av deg</h3>
              <p>Når du melder deg på Fagfilm som bruker registrerer vi din epostadresse og hvilken skole/institusjon du tilhører (ved hjelp av skolekoden)</p>
              <h3 className="text-xl">Opplysninger som samles inn om deg</h3>
              <p>Når du logger inn registerer vi <b>datoen for siste innlogging.</b> Er du kontaktperson hos lisensholder (skolen) har vi også fått ditt <b>fulle navn</b> og <b>jobb-epostadresse</b> når vi har kontaktet deg gjennom å ringe skolens hovednummer. Hvis du skal bruke Fagfilm kan innsamling av disse opplysningene ikke velges bort.</p>
            </div>        
          </Collapsible.Content>
        </section>

        <section className="border-solid border-[1px] border-neutral-300 rounded p-4">
          <Collapsible.Trigger asChild>
            <button>
              <h3 className="text-3xl"></h3>
            </button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div>
            </div>
          </Collapsible.Content>
        </section>


      </Collapsible.Root>
      
    </article >
    </div>
  );

}


export default PrivacyPage
