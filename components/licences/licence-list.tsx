'use client'
import { useState, useEffect } from "react";
import { getLicences } from "./actions";
import LicenceForm from "./licence-form";
import type { Licence } from "@prisma/client";

type SortDirection = "asc" | "desc";

export default function LicenceList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [licences, setLicences] = useState<Licence[]>([]);
  const [selectedLicence, setSelectedLicence] = useState<Licence | null>(null);
  const [sortColumn, setSortColumn] = useState<keyof Licence>("lisensbruker");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

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

  const handleSortClick = (column: keyof Licence) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedLicences = [...licences].sort((a, b) => {
    const columnA = a[sortColumn];
    const columnB = b[sortColumn];
    if (columnA < columnB) {
      return sortDirection === "asc" ? -1 : 1;
    } else if (columnA > columnB) {
      return sortDirection === "asc" ? 1 : -1;
    } else {
      return 0;
    }
  });
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Lisenser</h2>
        <div className="relative">
          <label htmlFor="search-input" className="sr-only">Søk:</label>
          <input id="search-input" type="text" value={searchTerm} onChange={handleSearchChange} className="border border-gray-300 rounded-md py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Søk etter lisenser" />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
      </div>
      <table className="table-auto w-full">
      <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSortClick("lisensbruker")}>
              Lisensbruker
              {sortColumn === "lisensbruker" && (
                <svg className="inline-block h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  {sortDirection === "asc" ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 6l5 5H5l5-5z" />
                  ) : (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 14l5-5H5l5 5z" />
                  )}
                </svg>
              )}
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSortClick("lisensEier")}>
              Lisenseier
              {sortColumn === "lisensEier" && (
                <svg className="inline-block h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  {sortDirection === "asc" ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 6l5 5H5l5-5z" />
                  ) : (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 14l5-5H5l5 5z" />
                  )}
                </svg>
              )}
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSortClick("skolekode")}>
              Skolekode
              {sortColumn === "skolekode" && (
                <svg className="inline-block h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  {sortDirection === "asc" ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 6l5 5H5l5-5z" />
                  ) : (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 14l5-5H5l5 5z" />
                  )}
                </svg>
              )}
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSortClick("orgNr")}>
              Orgnr
              {sortColumn === "orgNr" && (
                <svg className="inline-block h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  {sortDirection === "asc" ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 6l5 5H5l5-5z" />
                  ) : (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 14l5-5H5l5 5z" />
                  )}
                </svg>
              )}
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSortClick("eiersOrgNr")}>
              Eiers orgnr
              {sortColumn === "eiersOrgNr" && (
                <svg className="inline-block h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  {sortDirection === "asc" ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 6l5 5H5l5-5z" />
                  ) : (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 14l5-5H5l5 5z" />
                  )}
                </svg>
              )}
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSortClick("isGroupLicenseUser")}>
              Er gruppelisensbruker
              {sortColumn === "isGroupLicenseUser" && (
                <svg className="inline-block h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  {sortDirection === "asc" ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 6l5 5H5l5-5z" />
                  ) : (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 14l5-5H5l5 5z" />
                  )}
                </svg>
              )}
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Handlinger</th>
          </tr>
        </thead>
        <tbody>
          {sortedLicences.map((licence) => (
            <tr key={licence.id} className="border-t border-gray-200">
              <td className="px-4 py-2 text-sm font-medium text-gray-900">{licence.lisensbruker}</td>
              <td className="px-4 py-2 text-sm font-medium text-gray-900">{licence.lisensEier}</td>
              <td className="px-4 py-2 text-sm font-medium text-gray-900">{licence.skolekode}</td>
              <td className="px-4 py-2 text-sm font-medium text-gray-900">{licence.orgNr}</td>
              <td className="px-4 py-2 text-sm font-medium text-gray-900">{licence.eiersOrgNr}</td>
              <td className="px-4 py-2 text-sm font-medium text-gray-900">{licence.isGroupLicenseUser ? "Ja" : "Nei"}</td>
              <td className="px-4 py-2 text-sm font-medium">
                <button onClick={() => handleEditClick(licence)} className="text-blue-600 hover:text-blue-900">Endre</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedLicence && <LicenceForm licence={selectedLicence} />}
    </div>
  );
}