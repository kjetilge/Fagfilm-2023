import React from "react";
import Popover from "@/components/shared/popover";
import LicenceForm from "./licence-edit-form";
import type { Licence } from "@prisma/client";
import styles from './styles.module.css'

interface LicencePopoverProps {
  licence: Licence;
  isPopoverOpen: boolean;
  handleSaveLicence: (licence: Licence) => void;
  onToggle: () => void;
}

export default function LicencePopover({ licence, isPopoverOpen, handleSaveLicence, onToggle }: LicencePopoverProps) {
  return (
    <Popover
      content={<LicenceForm licence={licence} handleSaveLicence={handleSaveLicence}/>}
      openPopover={isPopoverOpen}
      setOpenPopover={onToggle}
      align='end'
    >
      <button className="text-blue-500 hover:text-blue-700 mr-2" onClick={onToggle}>
        Edit
      </button>
    </Popover>
  );
}