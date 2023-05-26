export default function Gift() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-6 bg-green-400"></div>
      <div className="w-[85px] h-14 bg-green-600"></div>
      <div className="absolute w-4 h-20 bg-red-500"></div>
      <div className="absolute w-[85px] h-4 bg-red-500 top-[80%]"></div>
    </div>
  );
}
