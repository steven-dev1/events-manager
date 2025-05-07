export default function CreateEventCard() {
  return (
    <div className="border flex flex-col w-full items-center justify-start border-gray-100 p-4 gap-4 rounded-xl shadow-lg">
      <h1 className="text-2xl font-semibold w-full">Create Event</h1>
      <div className="flex gap-2 items-start justify-between w-full">
        <ul className="list-disc list-inside text-sm">
            <li>Create, promote.</li>
            <li>Date, time.</li>
            <li>And location.</li>
        </ul>
        <button className="bg-blue-950 text-sm cursor-pointer transition-all duration-150 hover:bg-blue-100 hover:text-blue-950 text-white font-semibold py-2 px-4 rounded-lg">
          Create Event
        </button>   
      </div>
    </div>
  );
}