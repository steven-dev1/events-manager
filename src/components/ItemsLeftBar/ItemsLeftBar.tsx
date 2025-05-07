import Link from "next/link";

export default function ItemsLeftBar({icon, text, href}: {icon: React.ReactNode, text: string, href: string}) {
  return (
    <Link href={href} className="flex items-cente p-2 rounded-lg gap-2 cursor-pointer hover:bg-blue-100 hover:text-blue-950 transition-all duration-150">
        {icon}
      <p>{text}</p>
    </Link>
  );
}
