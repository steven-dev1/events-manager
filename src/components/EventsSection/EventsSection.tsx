import { createClient } from "@/utils/supabase/client";
import EventCard from "../EventCard/EventCard";
import { tables } from "@/utils/consts";
import { CalendarOff } from "lucide-react";

export default async function EventsSection() {
  const supabase = createClient();
  const { data: events, error } = await supabase
  .from(tables.events)
  .select(`
    *,
    event_categories (
      categories (
        name
      )
    )
  `);

  const isEmpty = events?.length === 0;

  console.log(events, error);
  return (
    <section className={`${isEmpty ? 'flex w-full items-center  justify-center' : 'grid'} gap-4 md:grid-cols-2 lg:grid-cols-3`}>
      {isEmpty && <div className="flex flex-col items-center justify-center w-full h-[200px]">
        <CalendarOff color="#d4d4d8" size={50} />
        <p className="font-semibold text-zinc-500">No events found</p>
        <p className="text-xs font-medium text-zinc-400">Create your first event to get started</p>
        </div>}
      {error && <p>Error: {error.message}</p>}
      {events?.map((event) => (
        <EventCard key={event.id} EventCardProps={event} />
      ))}
    </section>
  );
}
