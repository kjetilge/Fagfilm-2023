'use client'
// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { updateLicence } from './actions'
import { SubmitButton } from './submit-button'
import { useRef } from "react"

import { Licence } from '@prisma/client';

type LicenceFormProps = {
  licence: Licence;
};

export default function LicenceForm({ licence }: LicenceFormProps) {
  /* usage: <LicenceForm licence={licence} /> */
  const initialState = {
    message: null,
  }
  const [state, formAction] = useFormState(updateLicence, initialState)
  const { pending } = useFormStatus()
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form action="updateLicence">
      <label htmlFor="lisensbruker">Lisensbruker</label>
      <input type="text" name="lisensbruker" defaultValue={licence.lisensbruker} />
      <label htmlFor="skolekode">Skolekode</label>
      <input type="text" name="skolekode" defaultValue={licence.skolekode} />
      <label htmlFor="postnummer">Postnummer</label>
      <input type="text" name="postnummer" defaultValue={licence.postnummer ?? ''} />
      <label htmlFor="sted">Sted</label>
      <input type="text" name="sted" defaultValue={licence.sted ?? ''} />
      <label htmlFor="orgNr">OrgNr</label>
      <input type="text" name="orgNr" defaultValue={licence.orgNr} />
      <label htmlFor="kontaktperson">Kontaktperson</label>
      <input type="text" name="kontaktperson" defaultValue={licence.kontaktperson ?? ''} />
      <label htmlFor="KontaktpersonEpostFraLisens">KontaktpersonEpostFraLisens</label>
      <input
        type="text"
        name="KontaktpersonEpostFraLisens"
        defaultValue={licence.kontaktpersonEpostFraLisens ?? ''}
        required
      />
      <label htmlFor="PostmottakEpostFraNSR">PostmottakEpostFraNSR</label>
      <input
        type="text"
        name="PostmottakEpostFraNSR"
        defaultValue={licence.postmottakEpostFraNSR ?? ''}
        required
      />
      <label htmlFor="lisensEier">LisensEier</label>
      <input type="text" name="lisensEier" defaultValue={licence.lisensEier} required />
      <label htmlFor="eiersOrgnr">EiersOrgnr</label>
      <input type="text" name="eiersOrgnr" defaultValue={licence.eiersOrgNr} required />
      <label htmlFor="isGroupLicenseUser">IsGroupLicenseUser</label>
      <input
        type="checkbox"
        name="isGroupLicenseUser"
        defaultChecked={licence.isGroupLicenseUser}
      />
      <label htmlFor="startDate">StartDate</label>
      <input type="date" name="startDate" defaultValue={licence.startDate.toISOString().substr(0, 10)} required />
      <label htmlFor="ressursnummer">Ressursnummer</label>
      <input type="text" name="ressursnummer" defaultValue={licence.ressursnummer ?? ''} />
      <label htmlFor="endUserQuantity">EndUserQuantity</label>
      <input
        type="number"
        name="endUserQuantity"
        defaultValue={licence.endUserQuantity?.toString()}
        required
      />
      <label htmlFor="fakturaUrl">FakturaUrl</label>
      <input type="text" name="fakturaUrl" defaultValue={licence.fakturaUrl ?? ''} required />
      <SubmitButton disabled={pending}>Update Licence</SubmitButton>
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
      <p>{state?.message}</p>
    </form>
  );
}