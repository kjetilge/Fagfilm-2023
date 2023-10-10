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
  const initialState = {
    message: null,
  }
  const [state, formAction] = useFormState(updateLicence, initialState)
  const { pending } = useFormStatus()
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form action="updateLicence">
      <label htmlFor="lisensbruker">Lisensbruker</label>
      <input type="text" name="lisensbruker" defaultValue={licence.lisensbruker} required />
      <label htmlFor="skolekode">Skolekode</label>
      <input type="text" name="skolekode" defaultValue={licence.skolekode} required />
      <label htmlFor="postnummer">Postnummer</label>
      <input type="text" name="postnummer" defaultValue={licence.postnummer} required />
      <label htmlFor="sted">Sted</label>
      <input type="text" name="sted" defaultValue={licence.sted} required />
      <label htmlFor="orgNr">OrgNr</label>
      <input type="text" name="orgNr" defaultValue={licence.orgNr} required />
      <label htmlFor="kontaktperson">Kontaktperson</label>
      <input type="text" name="kontaktperson" defaultValue={licence.kontaktperson} required />
      <label htmlFor="KontaktpersonEpostFraLisens">KontaktpersonEpostFraLisens</label>
      <input
        type="text"
        name="KontaktpersonEpostFraLisens"
        defaultValue={licence.KontaktpersonEpostFraLisens}
        required
      />
      <label htmlFor="PostmottakEpostFraNSR">PostmottakEpostFraNSR</label>
      <input
        type="text"
        name="PostmottakEpostFraNSR"
        defaultValue={licence.PostmottakEpostFraNSR}
        required
      />
      <label htmlFor="lisensEier">LisensEier</label>
      <input type="text" name="lisensEier" defaultValue={licence.lisensEier} required />
      <label htmlFor="eiersOrgnr">EiersOrgnr</label>
      <input type="text" name="eiersOrgnr" defaultValue={licence.eiersOrgnr} required />
      <label htmlFor="isGroupLicenseUser">IsGroupLicenseUser</label>
      <input
        type="checkbox"
        name="isGroupLicenseUser"
        defaultChecked={licence.isGroupLicenseUser}
      />
      <label htmlFor="startDate">StartDate</label>
      <input type="date" name="startDate" defaultValue={licence.startDate} required />
      <label htmlFor="ressursnummer">Ressursnummer</label>
      <input type="text" name="ressursnummer" defaultValue={licence.ressursnummer} required />
      <label htmlFor="endUserQuantity">EndUserQuantity</label>
      <input
        type="number"
        name="endUserQuantity"
        defaultValue={licence.endUserQuantity}
        required
      />
      <label htmlFor="fakturaUrl">FakturaUrl</label>
      <input type="text" name="fakturaUrl" defaultValue={licence.fakturaUrl} required />
      <SubmitButton disabled={pending}>Update Licence</SubmitButton>
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
      <p>{state?.message}</p>
    </form>
  );
}