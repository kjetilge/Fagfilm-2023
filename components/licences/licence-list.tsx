'use client'
import { useState } from "react";
import LicenceForm from "./licence-edit-form";
import type { Licence } from "@prisma/client";
import Link from "next/link";
import DeleteLicence from "./delete-licence-form";
import LicenceRow from "./licence-row";

interface LicenceListProps {
  licences: Licence[],
  deleteLicence: (formData: FormData) => Promise<void | { message: string; } >
  updateLicence: (formData: FormData) => Promise<void | { message: string; } >
}

type LicenceKey = keyof Licence;

export default function LicenceList({ licences, deleteLicence, updateLicence }: LicenceListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<LicenceKey>("lisensbruker");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSortClick = (column: LicenceKey) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleDeleteClick = async (formData: FormData) => {
    const confirmed = window.confirm("Er du sikker på at du vil slette denne lisensen ?");

    if (confirmed) {
      try {
        const message = await deleteLicence(formData);
      } catch (error) {
        alert("Sletting gikk galt");
      }
    }
  };

  const filteredLicences = licences.filter((licence) =>
    licence.lisensbruker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedLicences = filteredLicences.sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
  
    if (aValue && bValue) {
      if (aValue < bValue) {
        return sortDirection === "asc" ? -1 : 1;
      } else if (aValue > bValue) {
        return sortDirection === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    } else if (aValue) {
      return sortDirection === "asc" ? -1 : 1;
    } else if (bValue) {
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
          <label htmlFor="search-input" className="sr-only">
            Søk:
          </label>
          <input
            id="search-input"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-md py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Søk etter lisenser"
          />
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
            <th
              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSortClick("lisensbruker")}
            >
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
            <th
              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSortClick("skolekode")}
            >
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
            <th
              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSortClick("endUserQuantity")}
            >
              End User Quantity
              {sortColumn === "endUserQuantity" && (
                <svg className="inline-block h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  {sortDirection === "asc" ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 6l5 5H5l5-5z" />
                  ) : (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 14l5-5H5l5 5z" />
                  )}
                </svg>
              )}
            </th>
            <th
              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSortClick("startDate")}
            >
              Start Date
              {sortColumn === "startDate" && (
                <svg className="inline-block h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  {sortDirection === "asc" ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 6l5 5H5l5-5z" />
                  ) : (
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 14l5-5H5l5 5z" />
                  )}
                </svg>
              )}
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedLicences.map((licence) => (
            <LicenceRow key={licence.id} licence={licence} deleteLicence={handleDeleteClick} updateLicence={updateLicence}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}