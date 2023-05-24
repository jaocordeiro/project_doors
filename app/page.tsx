"use client";
import { useState } from "react";
import Doors from "@/components/Doors";
import ModelDoor from "@/model/door";
import { createDoors } from "@/function/doors";

export default function Home() {
  const [doors, setDoors] = useState(createDoors(3, 2));

  function renderDoors() {
    return doors.map((door) => {
      return <Doors key={door.number} value={door} onChange={console.log} />;
    });
  }

  return <main className="flex">{renderDoors()}</main>;
}
