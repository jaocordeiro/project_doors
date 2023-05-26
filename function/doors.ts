import ModelDoor from "@/model/door";

export function createDoors(qtda: number, selected: number): ModelDoor[] {
  return Array.from({ length: qtda }, (_, i) => {
    const number = i + 1;
    const haveGift = number === selected;
    return new ModelDoor(number, haveGift);
  });
}

export function updateDoors(
  doors: ModelDoor[],
  modifiedPort: ModelDoor
): ModelDoor[] {
  return doors.map((currentDoor) => {
    const equalDoor = currentDoor.number === modifiedPort.number;

    if (equalDoor) {
      return modifiedPort;
    } else {
      return modifiedPort.open ? currentDoor : currentDoor.deselect();
    }
  });
}
