export default function DetailEventItem({icon, text}: {icon: React.ReactNode, text: string}) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-zinc-400">{icon}</p>
      <p className="text-xs font-medium text-zinc-800">{text}</p>
    </div>
  );
}
