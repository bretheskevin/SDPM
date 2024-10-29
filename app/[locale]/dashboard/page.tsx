import { DashboardActionList } from "@dashboard/DashboardActionList";

export default async function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

      <DashboardActionList />
    </div>
  );
}
