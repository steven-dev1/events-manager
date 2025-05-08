import MaxWidth from "@/components/MaxWidth/MaxWidth";
import { Plus } from "lucide-react";

export default function Events() {
  return (
    <MaxWidth>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-shadow-zinc-900">Create and manage your events.</p>
        </div>
        <div>
          <button className="flex items-center gap-2 px-3 py-2 font-medium text-white rounded-lg cursor-pointer hover:bg-zinc-800 bg-zinc-900">
            <Plus size={20} />
            Create Event
          </button>
        </div>
      </div>
    </MaxWidth>
  );
}
