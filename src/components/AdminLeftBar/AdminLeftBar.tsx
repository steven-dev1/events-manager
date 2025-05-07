'use client'
import { SlidersHorizontal, Calendar, CalendarClock, UserRoundSearch, ArrowBigLeftDash  } from "lucide-react";
import ItemsLeftBar from "../ItemsLeftBar/ItemsLeftBar";

export default function AdminLeftBar() {
  return (
    <section className="flex w-[200px] relative h-screen flex-col gap-4 items-center bg-blue-950 p-4">
        <button className="absolute cursor-pointer -right-11 top-2 rounded-lg p-2 bg-blue-100 text-blue-950 hover:bg-blue-950 hover:text-blue-100 transition-all duration-150 "><ArrowBigLeftDash size={20}/></button>
      <div className="flex items-center gap-2 mb-4 text-white">
        <Calendar />
        <h1 className="text-2xl font-semibold">EventM</h1>
      </div>
      <div className="h-full w-full flex flex-col gap-4 justify-start items-start">
        <ul className="flex flex-col gap-2 text-white w-full">
        <ItemsLeftBar href={'/dashboard'} icon={<SlidersHorizontal size={20}/>} text="Dashboard" />
        <ItemsLeftBar href={'/events'} icon={<CalendarClock size={20}/>} text="Events" />
        <ItemsLeftBar href={'/attendees'} icon={<UserRoundSearch size={20}/>} text="Attendees" />
        </ul>
      </div>
    </section>
  );
}