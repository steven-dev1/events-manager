import AdminLeftBar from "@/components/AdminLeftBar/AdminLeftBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen w-full gap-4">
      <AdminLeftBar />
      <div className="w-full h-full flex flex-col mr-4 items-center justify-center">
        {children}
      </div>
    </div>
  );
}
