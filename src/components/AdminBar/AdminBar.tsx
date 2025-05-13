"use client";
import {
  SlidersHorizontal,
  CalendarClock,
  UserRoundSearch,
  CalendarDays,
  LucideMenu,
} from "lucide-react";
import ItemsLeftBar from "../ItemsLeftBar/ItemsLeftBar";

export default function AdminBar() {
  return (
    <div className="w-full bg-white border-b border-zinc-200">
      <nav className="relative flex items-center justify-between w-full max-w-screen-lg gap-4 px-2 py-4 mx-auto bg-white">
        <div className="flex items-center gap-2 text-black">
          <CalendarDays size={22} />
          <h1 className="text-2xl font-bold">EventHub</h1>
        </div>
        <ul className="hidden gap-2 text-white sm:flex">
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
        <button className="flex items-center gap-2 cursor-pointer sm:hidden">
          <LucideMenu size={22} />
        </button>
        <div>
          <ul className="absolute  top-0 right-0 z-10 hidden flex-col h-screen gap-2 p-2 text-white w-[50%] bg-zinc-900 sm:hidden">
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
        </div>
      </nav>
    </div>
  );
}
