'use client'
// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { createLicence } from './actions'
import SubmitButton from './submit-button'
import { useRef } from "react";

const initialState = {
  message: null,
}

export default function AddLicenceForm() {
  const [state, formAction] = useFormState(createLicence, initialState)
  const { pending } = useFormStatus()
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
    ref={ref}
    action={async (formData) => {
      await formAction(formData);
      // ref.current?.reset();
    }}
    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <label htmlFor="lisensbruker" className="block text-gray-700 font-bold mb-2">Lisensbruker</label>
      <input type="text" name="lisensbruker" required/>
      <label htmlFor="skolekode" className="block text-gray-700 font-bold mb-2">Skolekode</label>
      <input type="text" name="skolekode" required />
      <label htmlFor="postnummer" className="block text-gray-700 font-bold mb-2">Postnummer</label>
      <input type="text" name="postnummer" required />
      <label htmlFor="sted" className="block text-gray-700 font-bold mb-2">Sted</label>
      <input type="text" name="sted" required />
      <label htmlFor="orgNr" className="block text-gray-700 font-bold mb-2">OrgNr</label>
      <input type="text" name="orgNr" required />
      <label htmlFor="kontaktperson" className="block text-gray-700 font-bold mb-2">Kontaktperson</label>
      <input type="text" name="kontaktperson" required />
      <label htmlFor="KontaktpersonEpostFraLisens"className="block text-gray-700 font-bold mb-2">KontaktpersonEpostFraLisens</label>
      <input type="text" name="KontaktpersonEpostFraLisens" required />
      <label htmlFor="PostmottakEpostFraNSR" className="block text-gray-700 font-bold mb-2">PostmottakEpostFraNSR</label>
      <input type="text" name="PostmottakEpostFraNSR" required />
      <label htmlFor="lisensEier" className="block text-gray-700 font-bold mb-2">LisensEier</label>
      <input type="text" name="lisensEier" required />
      <label htmlFor="eiersOrgnr" className="block text-gray-700 font-bold mb-2">EiersOrgnr</label>
      <input type="text" name="eiersOrgnr" required />
      <label htmlFor="isGroupLicenseUser" className="block text-gray-700 font-bold mb-2">IsGroupLicenseUser</label>
      <input type="checkbox" name="isGroupLicenseUser" />
      <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">StartDate</label>
      <input type="date" name="startDate" required />
      <label htmlFor="ressursnummer" className="block text-gray-700 font-bold mb-2">Ressursnummer</label>
      <input type="text" name="ressursnummer" required />
      <label htmlFor="endUserQuantity" className="block text-gray-700 font-bold mb-2">EndUserQuantity</label>
      <input type="number" name="endUserQuantity" required />
      <label htmlFor="fakturaUrl" className="block text-gray-700 font-bold mb-2">FakturaUrl</label>
      <input type="text" name="fakturaUrl" required />

      <SubmitButton title="Lagre"/>
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
      <p>{state?.message}</p>
    </form>
  );
}