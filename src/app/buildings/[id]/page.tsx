"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import BuildingCard from "@/app/components/BuildingCard";
import useFetch from "@/app/hooks/useFetch";
import { FLY } from "@/consts";
// Define the building type. Adjust the properties based on your actual data structure.
interface Building {
  name: string;
  id: number;
}

export default function BuildingPage({ params }: { params: { id: number } }) {
  const { data, loading, error } = useFetch(
    `${FLY}/ssf/buildings/${params.id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return (
    <main className="w-screen min-h-screen bg-neutral-300">
      <Header />
      <p>{params.id}</p>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(loading)}</p>
      <p>{JSON.stringify(error)}</p>
    </main>
  );
}
