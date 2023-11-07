'use client'
// import { useCollapse } from 'react-collapsed'
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';
import { useState } from 'react';



const PrivacyCollapsible = () => {
  // const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  const [open, setOpen] = useState(false);
  
  return (
    <div className="p-20 flex items-center">
    <article  className="prose prose-invert prose-sm md:prose-lg lg:prose-xl max-w-none">
      
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
            <button className="flex justify-between w-full">
                <h2 className="m-0 md:m-0 lg:m-0">Hva vi bruker opplysningene til (formål)</h2>
                <div className="pt-2 md:pt-3 ">{open ? <Cross2Icon /> : <RowSpacingIcon />}</div>
              </button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="mt-1">
              
            </div>
          </Collapsible.Content>
        </section>


        <section className="border-solid border-[1px] border-neutral-300 rounded p-4">
          <Collapsible.Trigger asChild>
            <button className="flex justify-between w-full">
                <h2 className="m-0 md:m-0 lg:m-0"></h2>
                <div className="pt-2 md:pt-3 ">{open ? <Cross2Icon /> : <RowSpacingIcon />}</div>
              </button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="mt-1">
            </div>
          </Collapsible.Content>
        </section>


        <section className="border-solid border-[1px] border-neutral-300 rounded p-4">
          <Collapsible.Trigger asChild>
            <button className="flex justify-between w-full">
                <h2 className="m-0 md:m-0 lg:m-0"></h2>
                <div className="pt-2 md:pt-3 ">{open ? <Cross2Icon /> : <RowSpacingIcon />}</div>
              </button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="mt-1">
            </div>
          </Collapsible.Content>
        </section>


        <section className="border-solid border-[1px] border-neutral-300 rounded p-4">
          <Collapsible.Trigger asChild>
            <button className="flex justify-between w-full">
                <h2 className="m-0 md:m-0 lg:m-0"></h2>
                <div className="pt-2 md:pt-3 ">{open ? <Cross2Icon /> : <RowSpacingIcon />}</div>
              </button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="mt-1">
            </div>
          </Collapsible.Content>
        </section>


        <section className="border-solid border-[1px] border-neutral-300 rounded p-4">
          <Collapsible.Trigger asChild>
            <button className="flex justify-between w-full">
                <h2 className="m-0 md:m-0 lg:m-0"></h2>
                <div className="pt-2 md:pt-3 ">{open ? <Cross2Icon /> : <RowSpacingIcon />}</div>
              </button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="mt-1">
            </div>
          </Collapsible.Content>
        </section>


        <section className="border-solid border-[1px] border-neutral-300 rounded p-4">
          <Collapsible.Trigger asChild>
            <button className="flex justify-between w-full">
                <h2 className="m-0 md:m-0 lg:m-0"></h2>
                <div className="pt-2 md:pt-3 ">{open ? <Cross2Icon /> : <RowSpacingIcon />}</div>
              </button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <div className="mt-1">
            </div>
          </Collapsible.Content>
        </section>

      </Collapsible.Root>
      
    </article >
    </div>
  );

}


export default PrivacyCollapsible
