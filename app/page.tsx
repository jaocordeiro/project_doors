import Doors from "@/components/Doors";

export default function Home() {
  return (
    <main>
      <div>
        <Doors selectedDoor />
        <Doors />
      </div>
    </main>
  );
}
