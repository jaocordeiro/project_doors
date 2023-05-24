import ModelDoor from "@/model/door";
interface TypeDoor {
  value: ModelDoor;
  onChange: (newDoor: ModelDoor) => void;
}
export default function Doors(props: TypeDoor) {
  const door = props.value;
  const selectedPort = door && !door.open ? door.selected : "";
  const toggleSelection = (e) => props.onChange(door.toggleSelection());
  const open = (e) => {
    e.stopPropagation();
    props.onChange(door.openDoor());
  };

  function renderDoor() {
    return (
      <div className="flex flex-col grow items-center p-4 bg-amber-800">
        <div className={`text-5xl ${selectedPort ? `text-yellow-300` : ""}`}>
          {door.number}
        </div>
        <div
          onClick={open}
          className={`absolute self-start h-5 w-5 rounded-3xl bg-amber-900 top-[45%] ${
            selectedPort ? `bg-yellow-300` : ""
          }`}
        ></div>
      </div>
    );
  }

  return (
    <div
      className="w-52 h-80 flex flex-col items-center mx-2 relative"
      onClick={toggleSelection}
    >
      <div
        className={`flex w-11/12 grow border-solid border-4 border-amber-900 bg-[#0005]${
          selectedPort ? `border-solid border-4 border-yellow-300` : ""
        }`}
      >
        {door.open ? false : renderDoor()}
      </div>
      <div className="h-3 w-full bg-gray-300"></div>
    </div>
  );
}
