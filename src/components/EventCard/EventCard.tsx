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
import { EventProps } from "@/types";
import { toggleMenu } from "@/redux/eventMenuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";

export default function EventCard({
  EventCardProps,
}: {
  EventCardProps: EventProps;
}) {
  const seats = EventCardProps?.capacity + " seats";
  const dispatch = useAppDispatch();
  const openCardId = useAppSelector((state) => state.eventMenu.openCardId);

  const isMenuOpen = openCardId === EventCardProps.id;

  return (
    <article className="flex flex-col items-center justify-between gap-4 p-4 transition-all duration-150 border rounded-lg shadow-md border-zinc-200">
      <div className="flex items-center justify-between w-full gap-2">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold">
            {EventCardProps.title ?? "Error to load event name"}
          </h2>
          <p className="text-sm text-zinc-500">
            {EventCardProps.description ?? "Error to load event description"}
          </p>
        </div>
        <div className="relative">
          <button
            onClick={() => dispatch(toggleMenu(EventCardProps.id))}
            className="p-1 rounded-full cursor-pointer hover:bg-zinc-100"
          >
            <EllipsisVertical size={20} />
          </button>
            <div className={`${isMenuOpen ? "scale-100" : "scale-0"} absolute right-0 transition-all duration-150 top-10`}>
              <ul className="p-2 text-xs font-medium rounded-lg shadow-md bg-zinc-100">
                <li>
                  <Link href={"./event/edit"} className="flex items-center w-full gap-1 p-1 rounded-lg cursor-pointer hover:bg-zinc-200">
                    <Edit size={16} /> Edit
                  </Link>
                </li>
                <li>
                  <button className="flex items-center w-full gap-1 p-1 rounded-lg cursor-pointer hover:bg-red-100 hover:text-red-600">
                    <Trash2 size={16} /> Delete
                  </button>
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
          text={`${EventCardProps.starttime ?? "Error"} - ${
            EventCardProps.endtime ?? "Error"
          }`}
        />
        <DetailEventItem
          icon={<MapPin size={18} />}
          text={EventCardProps.location ?? "Error to load event location"}
        />
        <DetailEventItem
          icon={<Users size={18} />}
          text={seats ?? "Error to load event seats"}
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
