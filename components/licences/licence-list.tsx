'use client'
import { useState, useEffect } from "react";
import { getLicences } from "./actions";
import LicenceForm from "./licence-form";
import type { Licence } from "@prisma/client";

export default function LicenceList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [licences, setLicences] = useState<Licence[]>([]);
  const [selectedLicence, setSelectedLicence] = useState<Licence | null>(null);

  useEffect(() => {
    async function fetchLicences() {
      const licences = await getLicences("");
      setLicences(licences);
    }
    fetchLicences();
  }, []);

  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const licences = await getLicences(event.target.value);
    setLicences(licences);
  };

  const handleEditClick = (licence: Licence) => {
    setSelectedLicence(licence);
  };

  return (
    <div>
      <label htmlFor="search-input">Søk:</label>
      <input id="search-input" type="text" value={searchTerm} onChange={handleSearchChange} />
      <table>
        <thead>
          <tr>
          <th>Lisensbruker</th>
          <th>Lisenseier</th>
          <th>Skolekode</th>
          <th>Orgnr</th>
          <th>Eiers orgnr</th>
          <th>Er gruppelisensbruker</th>
          <th>Handlinger</th>
          </tr>
        </thead>
        <tbody>
          {licences.map((licence) => (
            <tr key={licence.id}>
            <td>{licence.lisensbruker}</td>
            <td>{licence.lisensEier}</td>
            <td>{licence.skolekode}</td>
            <td>{licence.orgNr}</td>
            <td>{licence.eiersOrgNr}</td>
            <td>{licence.isGroupLicenseUser ? "Ja" : "Nei"}</td>
            <td>
              <button onClick={() => handleEditClick(licence)}>Endre</button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedLicence && <LicenceForm licence={selectedLicence} />}
    </div>
  );
}