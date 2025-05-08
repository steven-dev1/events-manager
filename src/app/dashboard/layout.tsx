import AdminLeftBar from "@/components/AdminBar/AdminBar";
import MaxWidth from "@/components/MaxWidth/MaxWidth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mx-auto">
      <AdminLeftBar />
      <MaxWidth className="">
        {children}
      </MaxWidth>
    </div>
  );
}
