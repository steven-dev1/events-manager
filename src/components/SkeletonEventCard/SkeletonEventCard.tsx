import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

export default function SkeletonEventCard() {
  return (
    <article className="flex flex-col items-center justify-between gap-4 p-4 transition-all duration-150 border rounded-lg shadow-md border-zinc-200 animate-pulse">
      <div className="flex items-center justify-between w-full gap-2">
        <div className="flex flex-col items-start gap-2">
          <div className="w-40 h-5 rounded bg-zinc-300" />
          <div className="w-64 h-3 rounded bg-zinc-200" />
        </div>
        <div className="relative">
          <div className="w-6 h-6 rounded-full bg-zinc-200" />
        </div>
      </div>

      <div className="flex flex-col items-start w-full gap-3">
        <SkeletonDetailItem icon={<CalendarDays size={18} />} />
        <SkeletonDetailItem icon={<Clock size={18} />} />
        <SkeletonDetailItem icon={<MapPin size={18} />} />
        <SkeletonDetailItem icon={<Users size={18} />} />
      </div>

      <div className="w-full">
        <div className="w-full h-8 my-2 rounded-lg bg-zinc-300" />
      </div>
    </article>
  );
}

function SkeletonDetailItem({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-zinc-400">{icon}</div>
      <div className="w-40 h-3 rounded bg-zinc-200" />
    </div>
  );
}