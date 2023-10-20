'use client'

import SubmitButton from './submit-button'


interface DeleteLicenceFormProps {
  licenceId: string;
  deleteLicence: (formData:FormData) => string | void;
}


export default function DeleteLicence({ licenceId, deleteLicence }: DeleteLicenceFormProps) {
  // const [state, formAction] = useFormState(deleteLicence, initialState)

  return (
    <form action={deleteLicence}>
      <input type="hidden" name="licenceId" value={licenceId} />
      <SubmitButton title='Slett' />
    </form>
  );
}