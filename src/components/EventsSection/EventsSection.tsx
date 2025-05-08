import TableEvent from "../TableEvent/TableEvent";

export default function EventsSection() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Manage your events</h1>
      <div className="flex flex-col w-full gap-4">
        <TableEvent />
      </div>
    </section>
  );
}
