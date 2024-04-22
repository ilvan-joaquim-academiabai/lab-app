"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import React from "react";
import InputLab from "./InputLab";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "designation",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Designação
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "functional",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Funcionais
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const id = row.original.id;

      const functional = row.getValue("functional") as number;
      const nonFunctional = row.getValue("nonFunctional") as number;
      const disabled = functional === 0 && nonFunctional === 0 && Number(row.id) === 0 ? true : false;
      return (
        <InputLab
          disabled={disabled}
          type="functional"
          value={functional}
          id={id}
        />
      );
    },
  },
  {
    accessorKey: "nonFunctional",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Não Funcionais
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const id = row.original.id;
      const functional = row.getValue("functional") as number;
      const nonFunctional = row.getValue("nonFunctional") as number;
      const disabled = functional === 0 && nonFunctional === 0 && Number(row.id) === 0 ? true : false;
      return (
        <InputLab
          disabled={disabled}
          type="nonFunctional"
          value={nonFunctional}
          id={id}
        />
      );
    },
  },
  {
    accessorKey: "numberTotal",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Número Total
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const numberTotal = row.getValue("numberTotal") as number;
      const disabled = Number(row.id) !== 0 ? true : false;
      console.log(numberTotal);
      
      // const nonFunctional = row.getValue("nonFunctional") as number;
      // const numberTotal = functional + nonFunctional;
      return (
        <Input disabled={disabled}  value={String(numberTotal)} type="number" />
      );
    },
  },
];
