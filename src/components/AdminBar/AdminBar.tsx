"use client";
import {
  SlidersHorizontal,
  CalendarClock,
  UserRoundSearch,
  CalendarDays,
} from "lucide-react";
import ItemsLeftBar from "../ItemsLeftBar/ItemsLeftBar";

export default function AdminBar() {
  return (
    <div className="w-full bg-white border-b border-zinc-200">
      <nav className="relative flex items-center justify-between w-full max-w-screen-lg gap-4 py-4 mx-auto bg-white">
        <div className="flex items-center gap-2 text-black">
          <CalendarDays size={22} />
          <h1 className="text-2xl font-bold">EventHub</h1>
        </div>
        <ul className="flex gap-2 text-white">
          <ItemsLeftBar
            href={"/dashboard"}
            icon={<SlidersHorizontal size={20} />}
            text="Dashboard"
          />
          <ItemsLeftBar
            href={"/dashboard/events"}
            icon={<CalendarClock size={20} />}
            text="Events"
          />
          <ItemsLeftBar
            href={"/dashboard/attendees"}
            icon={<UserRoundSearch size={20} />}
            text="Attendees"
          />
        </ul>
      </nav>
    </div>
  );
}
