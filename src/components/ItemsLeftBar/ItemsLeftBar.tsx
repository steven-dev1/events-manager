import Link from "next/link";

export default function ItemsLeftBar({icon, text, href}: {icon: React.ReactNode, text: string, href: string}) {
  return (
    <Link href={href} className="flex items-center gap-2 p-2 font-medium transition-all duration-150 rounded-lg cursor-pointer hover:bg-zinc-100 text-zinc-900 hover:text-black">
        {icon}
      <p>{text}</p>
    </Link>
  );
}
