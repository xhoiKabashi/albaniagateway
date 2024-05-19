"use client";
import Image from "next/image";
import React, { useState } from "react";
import MapCityCard from "@/components/organisms/map/MapCityCard";

interface CityTypes {
  top: number;
  right: number;
  name: string;
  reverse: boolean;
}

const CityMarker = ({
  top,
  right,
  name,
  reverse,
  onHover,
}: CityTypes & { onHover: (city: string) => void }) => {
  return (
    <div
      className={`absolute text-sm flex gap-2  justify-start items-start group ${
        reverse ? "flex-row-reverse" : ""
      }`}
      style={{ top: `${top}px`, right: `${right}px` }}
      onMouseEnter={() => onHover(name)}
    >
      <div className="h-7 w-7 rounded-full opacity-50  group-hover:bg-red-600 transition-colors duration-300"></div>
      <div className="h-4 uppercase text-slate-800 text-[10px] tracking-widest font-semibold group-hover:text-red-600 transition-colors duration-300">
        {name}
      </div>
    </div>
  );
};

function calculateNewCoordinate(original: number, factor: number) {
  return Math.round(original * factor);
}

export default function Map() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const cities = [
    { top: 55, right: 140, name: "Tropoja", reverse: false },
    { top: 47, right: 277, name: "Theth", reverse: true },
    { top: 108, right: 306, name: "Shkoder", reverse: true },
    { top: 160, right: 288, name: "Lezhe", reverse: true },
    { top: 207, right: 204, name: "Kruje", reverse: false },
    { top: 244, right: 193, name: "Tirane", reverse: false },
    { top: 244, right: 320, name: "Durres", reverse: true },
    { top: 280, right: 140, name: "Elbasan", reverse: false },
    { top: 324, right: 40, name: "Pogradec", reverse: false },
    { top: 373, right: 60, name: "Korca", reverse: false },
    { top: 356, right: 180, name: "Berat", reverse: false },
    { top: 396, right: 315, name: "Vlora", reverse: true },
    { top: 457, right: 290, name: "Dhermi & Himara", reverse: true },
    { top: 435, right: 237, name: "Tepelena", reverse: true },
    { top: 513, right: 245, name: "Saranda", reverse: true },
    { top: 476, right: 95, name: "Gjirokaster", reverse: false },
    { top: 444, right: 111, name: "Permet", reverse: false },
  ];

  const newCities = cities.map((city) => ({
    ...city,
    top: calculateNewCoordinate(city.top, 0.7413),
    right: calculateNewCoordinate(city.right, 0.7),
  }));

  return (
    <div className=" flex flex-col    md:flex-row">
      <MapCityCard city={hoveredCity} />
      <div className="flex flex-col items-end relative">
        <div className="relative w-[350px] h-[430px]">
          <Image
            src="/map-cities.png"
            alt="Albania map"
            layout="fill"
            objectFit="cover" // Ensures the image fits well
          />
        </div>
        {newCities.map((city, index) => (
          <CityMarker key={index} {...city} onHover={setHoveredCity} />
        ))}
      </div>
    </div>
  );
}

// Shkoder: "Shkoder information",
// Lezhe: "Lezhe information",
// Kruje: "Kruje information",
// Tirane: "Tirane information",
// Durres: "Durres information",
// Elbasan: "Elbasan information",
// Pogradec: "Pogradec information",
// Korca: "Korca information",
// Berat: "Berat information",
// Vlora: "Vlora information",
// "Dhermi & Himara": "Dhermi & Himara information",
// Tepelena: "Tepelena information",
// Saranda: "Saranda information",
// Gjirokaster: "Gjirokaster information",
// Permet: "Permet information",
