import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatCards } from "@/features/savings/components/StatCards";
import { SavingsChart } from "@/features/savings/components/SavingsChart";
import { SavingsTable } from "@/features/savings/components/SavingsTable";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50/30">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            <StatCards />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SavingsChart />
              <SavingsTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
