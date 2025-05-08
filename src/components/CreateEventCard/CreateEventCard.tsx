export default function CreateEventCard() {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-violet-100 text-violet-900 rounded-xl">
      <h1 className="w-full text-2xl font-semibold">Create Event</h1>
      <div className="flex items-start justify-between w-full gap-2">
        <ul className="text-sm list-disc list-inside">
            <li>Create, promote.</li>
            <li>Date, time.</li>
            <li>And location.</li>
        </ul>
        <button className="px-4 py-2 text-sm font-semibold text-white transition-all duration-150 rounded-lg cursor-pointer bg-violet-700 hover:bg-violet-950 ">
          Create Event
        </button>   
      </div>
    </div>
  );
}