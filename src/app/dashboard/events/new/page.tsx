import FormNewEvent from "@/components/FormNewEvent/FormNewEvent";
import { routes } from "@/utils/consts";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewEvent() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Link href={routes.events} className="p-2 rounded-lg cursor-pointer hover:bg-zinc-100"><ArrowLeft size={20} /></Link>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-2xl font-bold">Create Event</h1>
          <p className="text-sm text-shadow-zinc-900">Add a new event to your calendar</p>
        </div>
      </div>
      <FormNewEvent />
    </div>
  );
}