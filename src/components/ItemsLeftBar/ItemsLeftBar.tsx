import Link from "next/link";

export default function ItemsLeftBar({icon, text, href, darkmode}: {icon: React.ReactNode, text: string, href: string, darkmode?: boolean}) {
  const isDarkMode = darkmode ? 'hover:bg-zinc-100 text-zinc-900 hover:text-black' : 'hover:bg-zinc-200 text-zinc-800';
  return (
    <Link href={href} className={`flex items-center gap-2 p-2 font-medium transition-all duration-150 rounded-lg cursor-pointer ${isDarkMode}`}>
        {icon}
      <p>{text}</p>
    </Link>
  );
}
