'use client'
import { useState } from "react";
import { seedLicences } from "@/lib/seed-licences";
import Popover from "@/components/shared/popover";
import LicenceForm from '@/components/hjemmesider/licences/licence-edit-form';
export default function ImportLicences() {
  const [isSeeding, setIsSeeding] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSeeding(true);
    await seedLicences();
    setIsSeeding(false);
    setIsPopoverOpen(false);
  };

  return (
    <Popover
      content={
        <div className="p-4">
          <h2 className="text-lg font-medium mb-4">Importer lisenser</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={isSeeding}
              >
                {isSeeding ? "Importerer lisenser..." : "Importer lisenser"}
              </button>
            </div>
          </form>
        </div>
      }
      openPopover={isPopoverOpen}
      setOpenPopover={setIsPopoverOpen}
    >
      <button onClick={() => setIsPopoverOpen(true)}>Importer lisenser</button>
    </Popover>
  );
}