import { createClient } from "@/utils/supabase/client";
import EventCard from "../EventCard/EventCard";
import { tables } from "@/utils/consts";

export default async function EventsSection() {
  const supabase = createClient();
  const { data: events, error } = await supabase.from(tables.users).select("*");

  console.log(events, error);
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {error && <p>Error: {error.message}</p>}
      {events?.map((event) => (
        <EventCard key={event.id} EventCardProps={event} />
      ))}
    </section>
  );
}
