export default function Doors({ selectedDoor }: any) {
  const selectedPort = selectedDoor ? selectedDoor : "";
  return (
    <div className="w-52 h-80 flex flex-col items-center mx-2 relative">
      <div
        className={`flex w-11/12 grow border-solid border-4 border-amber-900 ${
          selectedPort ? `border-solid border-4 border-yellow-300` : ""
        }`}
      >
        <div className="flex flex-col grow items-center p-4 bg-amber-800">
          <div className={`text-5xl ${selectedPort ? `text-yellow-300` : ""}`}>
            3
          </div>
          <div
            className={`absolute self-start h-5 w-5 rounded-3xl bg-amber-900 top-[45%] ${
              selectedPort ? `bg-yellow-300` : ""
            }`}
          ></div>
        </div>
      </div>
      <div className="h-3 w-full bg-gray-300"></div>
    </div>
  );
}
