"use client";
import {
  CalendarDays,
  Clock,
  Edit,
  EllipsisVertical,
  MapPin,
  Trash2,
  Users,
} from "lucide-react";
import DetailEventItem from "../DetailEventItem/DetailEventItem";
import { useState } from "react";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  starttime: string;
  endtime: string;
  location: string;
  capacity: number;
}

export default function EventCard({
  EventCardProps,
}: {
  EventCardProps: EventCardProps;
}) {
  const [open, setOpen] = useState(false);
  return (
    <article className="flex flex-col items-center justify-between gap-4 p-4 transition-all duration-150 border rounded-lg shadow-md border-zinc-200">
      <div className="flex items-center justify-between w-full gap-2">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold">{EventCardProps.title}</h2>
          <p className="text-sm text-zinc-500">{EventCardProps.description}</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="p-1 rounded-full cursor-pointer hover:bg-zinc-100"
          >
            <EllipsisVertical size={20} />
          </button>
          <div
            className={`absolute top-1 right-0 ${
              open ? "scale-0 opacity-0" : "scale-100 opacity-100"
            } transition-all duration-150 translate-y-full`}
          >
            <ul className="p-2 text-xs font-medium rounded-lg shadow-md bg-zinc-100">
              <li className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-zinc-200">
                <Edit size={16} /> Edit
              </li>
              <li className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-red-100 hover:text-red-600">
                <Trash2 size={16} />
                Delete
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full gap-2">
        <DetailEventItem
          icon={<CalendarDays size={18} />}
          text={EventCardProps.date}
        />
        <DetailEventItem
          icon={<Clock size={18} />}
          text={`${EventCardProps.starttime} - ${EventCardProps.endtime}`}
        />
        <DetailEventItem
          icon={<MapPin size={18} />}
          text={EventCardProps.location}
        />
        <DetailEventItem
          icon={<Users size={18} />}
          text={`${EventCardProps.capacity} seats`}
        />
      </div>
      <div className="w-full">
        <button className="w-full p-2 my-2 text-sm text-white rounded-lg cursor-pointer hover:bg-zinc-800 bg-zinc-900">
          View details
        </button>
      </div>
    </article>
  );
}
