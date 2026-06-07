"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CreateSavingForm from "./create-saving-form";

export function CreateSavingSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Add Saving
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Input Tabungan</SheetTitle>
          <SheetDescription>
            Masukkan data tabungan baru. Klik simpan ketika selesai.
          </SheetDescription>
        </SheetHeader>

        <div className="px-4 py-2">
          <CreateSavingForm />
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default CreateSavingSheet;
