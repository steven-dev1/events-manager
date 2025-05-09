import { CalendarDays, Clock, EllipsisVertical, MapPin, Users } from "lucide-react";
import DetailEventItem from "../DetailEventItem/DetailEventItem";

interface EventCardProps {
    name: string;
    description: string;
    date: string;
    starttime: string;
    endtime: string;
    location: string;
    capacity: number;
}

export default function EventCard({EventCardProps}: {EventCardProps: EventCardProps}) {
  return (
    <article className="flex flex-col items-center justify-between gap-4 p-4 transition-all duration-150 border rounded-lg shadow-md border-zinc-200">
        <div className="flex items-center justify-between w-full gap-2">
            <div className="flex flex-col items-start">
                <h2 className="text-xl font-bold">{EventCardProps.name}</h2>
                <p className="text-sm text-zinc-500">{EventCardProps.description}</p>
            </div>
            <div>
                <button className="p-1 rounded-full cursor-pointer hover:bg-zinc-100"><EllipsisVertical size={20} /></button>
            </div>
        </div>
        <div className="flex flex-col items-start w-full gap-2">
            <DetailEventItem icon={<CalendarDays size={18}/>} text={EventCardProps.date} />
            <DetailEventItem icon={<Clock size={18}/>} text={`${EventCardProps.starttime} - ${EventCardProps.endtime}`} />
            <DetailEventItem icon={<MapPin size={18}/>} text={EventCardProps.location} />
            <DetailEventItem icon={<Users size={18}/>} text={`${EventCardProps.capacity} seats`} />
        </div>
        <div className="w-full">
            <button className="w-full p-2 my-2 text-sm text-white rounded-lg cursor-pointer hover:bg-zinc-800 bg-zinc-900">View details</button>
        </div>
    </article>
  )
}