import React from "react";
import Card from "./Card";

interface BuildingCardProps {
  building: {
    id: number;
    name: string;
  };
}

const BuildingCard: React.FC<BuildingCardProps> = ({ building }) => {
  return (
    <Card link={`/buildings/${building.id}`}>
      <h2 className="font-semibold text-center w-full">{building.name}</h2>
    </Card>
  );
};

export default BuildingCard;
