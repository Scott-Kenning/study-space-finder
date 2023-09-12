"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";
import { FLY } from "../consts";
import BuildingCard from "./components/BuildingCard";

// Define the building type. Adjust the properties based on your actual data structure.
interface Building {
  name: string;
  id: number;
}

export default function Home() {
  const { data, loading, error } = useFetch(`${FLY}/ssf/buildings`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredBuildings =
    data?.filter((building: Building) =>
      building.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <main className="w-screen min-h-screen bg-neutral-300">
      <Header />
      <div className="py-16 flex flex-col items-center">
        <div className="p-4">
          <input
            type="text"
            placeholder="Search buildings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-400 w-96 rounded"
          />
        </div>
        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black mt-16"></div>
          </div>
        )}
        {!loading && filteredBuildings && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto ">
            {filteredBuildings.map((building: Building, index: number) => (
              <div key={index}>
                <BuildingCard building={building} />
              </div>
            ))}
          </div>
        )}
        {error && <p className="text-red-500">Error: {error.message}</p>}
      </div>
    </main>
  );
}
