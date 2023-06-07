"use client";
import { useEffect, useState } from "react";
import Doors from "@/components/Doors";
import { createDoors, updateDoors } from "@/function/doors";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Game() {
  const searchParams = useSearchParams();
  const [doors, setDoors] = useState([]);

  const door = searchParams.get("page");
  const order = searchParams.get("order");

  // useEffect(() => {
  //   const doors = +router.query.doors;
  //   const withGift = +router.query.haveGift;
  //   setDoors(createDoors(doors, withGift));
  // }, [router?.query]);

  console.log("searchParams", door, order);

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Doors
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
        />
      );
    });
  }
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-wrap self-stretch justify-around">
        {renderDoors()}
      </div>
      <div className="flex justify-center mt-14">
        <Link href="/">
          <button className="bg-red-500 rounded-full text-white font-semibold text-2xl py-3 px-6 hover:bg-red-400 duration-700">
            Reiniciar Jogo
          </button>
        </Link>
      </div>
    </main>
  );
}
