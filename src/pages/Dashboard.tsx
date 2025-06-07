import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { StatsCards } from "../components/StatsCards";
import { DataTable } from "../components/DataTable";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 space-y-6">
          <StatsCards />
          <DataTable />
        </main>
      </div>
    </div>
  );
}