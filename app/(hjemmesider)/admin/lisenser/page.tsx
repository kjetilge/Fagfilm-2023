import { useState } from "react";
import LicenceList from "@/components/hjemmesider/licences/licence-list";
import Link from "next/link";
import ImportLicences from "@/components/hjemmesider/licences/import-licences";
import { getLicences } from "@/components/hjemmesider/licences/actions";
import { deleteLicence, updateLicence } from "@/components/hjemmesider/licences/actions";

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