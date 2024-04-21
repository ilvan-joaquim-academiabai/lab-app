"use client";

import Image from "next/image";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useStore } from "@/store/lab";


export default function Table() {
  const labs = useStore((state) => state.labs);

  
  return (
    <main className="w-5/6 mx-auto">
      <DataTable columns={columns} data={labs} />
    </main>
  );
}
