import EventsSection from "@/components/EventsSection/EventsSection";
import MaxWidth from "@/components/MaxWidth/MaxWidth";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default async function Events() {

  
  return (
    <MaxWidth>
      <div className="flex flex-col items-center justify-between gap-2 my-4 sm:gap-0 sm:flex-row">
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-2xl font-bold 2xl:text-3xl">Events</h1>
          <p className="text-sm text-shadow-zinc-900">Create and manage your events.</p>
        </div>
        <div>
          <Link href={'/dashboard/events/new'} className="flex items-center w-full gap-2 px-3 py-2 text-sm font-medium text-white rounded-lg cursor-pointer hover:bg-zinc-800 bg-zinc-900">
            <Plus size={20} />
            Create Event
          </Link>
        </div>
      </div>
      <form className="relative flex items-center pl-2 my-4 border rounded-lg border-zinc-200 focus-within:border-zinc-500">
        <label htmlFor="search"><Search color="#9f9fa9" size={16} className="" /></label>
        <input type="search" name="search" placeholder="Search Events" className='w-full p-2 ml-2 text-sm bg-white rounded-lg outline-none border-zinc-200 focus-within-zinc-400 text-zinc-900' />
      </form>
      <EventsSection />
    </MaxWidth>
  );
}
