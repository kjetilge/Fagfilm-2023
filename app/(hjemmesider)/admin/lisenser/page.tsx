import { useState } from "react";
import LicenceList from "@/components/licences/licence-list";
import Link from "next/link";
import ImportLicences from "@/components/licences/import-licences";
import { getLicences } from "@/components/licences/actions";
import { deleteLicence, updateLicence } from "@/components/licences/actions";

// interface LicenceListProps {
//   licences: Licence[];
//   deleteLicence: (formData:FormData) => string | void;
// }
// formData: FormData

export default async function Licences() {
  const licences = await getLicences();
  return (
    <>
      <h1 className="text-2xl font-bold">Lisenser</h1>
      <ImportLicences />
      <Link href="/admin/lisenser/legg-til">Opprett lisens</Link>
      <LicenceList licences={licences} deleteLicence={ deleteLicence } updateLicence={ updateLicence} />
    </>
  );
}