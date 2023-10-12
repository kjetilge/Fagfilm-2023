import React from "react";
import type { Licence } from "@prisma/client";
// import DeleteLicence from "./delete-licence-form";
import Link from "next/link";
import LicenceForm from "./licence-edit-form";
import Popover from "@/components/shared/popover";
import LicencePopover from "./edit-licence-popover";
import { useState, useEffect } from "react";
import SubmitButton from './submit-button'

interface LicenceRowProps {
  licence: Licence;
  deleteLicence: (formData: FormData) => void | string;
}

export default function LicenceRow({ licence, deleteLicence }: LicenceRowProps) {
  const startDate = new Date(licence.startDate);
  const oneYearFromStartDate = new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate());
  const formattedDate = `${oneYearFromStartDate.getDate().toString().padStart(2, "0")}.${(oneYearFromStartDate.getMonth() + 1).toString().padStart(2, "0")}.${oneYearFromStartDate.getFullYear()}`;
  const isDateOlderThanOneYear = oneYearFromStartDate < new Date();
  const dateColorClass = isDateOlderThanOneYear ? "text-orange-500" : "";

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleToggle = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleSubmit = (updatedLicence: Licence) => {
    // Code to update licence goes here
    setIsPopoverOpen(false);
  };

  return (
    <React.Fragment>
      <tr>
      <td className="border px-4 py-2">{licence.lisensbruker}</td>
              <td className="border px-4 py-2">{licence.skolekode}</td>
              <td className="border px-4 py-2">{licence.endUserQuantity}</td>
        <td className={`border px-4 py-2 ${dateColorClass}`}>{formattedDate}</td>
        <td className="border px-4 py-2">
          <LicencePopover
            licence={licence}
            isPopoverOpen={isPopoverOpen}
            setIsPopoverOpen={setIsPopoverOpen}
            onToggle={handleToggle}
          />
          
          <form action={deleteLicence}>
            <input type="hidden" name="licenceId" value={licence.id} />
            <SubmitButton title='Slett' />
          </form>
        </td>
      </tr>
    </React.Fragment>
  );
}