'use client';
import { createClient } from "@/utils/supabase/client";
import EventCard from "../EventCard/EventCard";
import { tables } from "@/utils/consts";
import { CalendarOff } from "lucide-react";
import { useEffect, useState } from "react";
import { PostgrestError } from '@supabase/supabase-js';
import { EventProps } from "@/types";
import SkeletonEventCard from "../SkeletonEventCard/SkeletonEventCard";

export default function EventsSection() {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [loading, setLoading] = useState(true);
  
  const supabase = createClient();
  
  useEffect(() => {
    try {
      supabase
        .from(tables.events)
        .select("*")
        .order("date", { ascending: false })
        .limit(10)
        .then(({ data, error }) => {
          if (error) {
            setError(error);
          } else {
            setEvents(data);
          }
          setLoading(false);
        });
    } catch (error) {
      setError(error as PostgrestError);
      setLoading(false);
    }
  }, [supabase]);

  const isEmpty = events?.length === 0;

  return (
    <section className={`${isEmpty ? 'flex w-full items-center  justify-center' : 'grid'} gap-4 md:grid-cols-2 lg:grid-cols-3`}>
      {loading && <div className="flex w-full gap-4">
        <SkeletonEventCard />
        <SkeletonEventCard />
        <SkeletonEventCard />
        </div>}
      {isEmpty && !loading && <div className="flex flex-col items-center justify-center w-full h-[200px]">
        <CalendarOff color="#d4d4d8" size={50} />
        <p className="font-semibold text-zinc-500">No events found</p>
        <p className="text-xs font-medium text-zinc-400">Create your first event to get started</p>
        </div>}
      {error && <p>Error: {error.message}</p>}
      {events?.map((e) => {
        return <EventCard key={e.id} EventCardProps={e} />;
      })}
    </section>
  );
}
