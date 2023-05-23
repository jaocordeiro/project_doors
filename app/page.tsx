import { useState } from "react";
import Doors from "@/components/Doors";
import ModelDoor from "@/model/door";

export default function Home() {
  const [door1, setDoor1] = useState(new ModelDoor(1));

  return (
    <main>
      <div>
        <Doors value={door1} />
      </div>
    </main>
  );
}
