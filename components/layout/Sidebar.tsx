"use client";

import Link from "next/link";
import { LayoutDashboard, Receipt, Wallet, Target, PiggyBank, Settings, HelpCircle, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Receipt, label: "Transactions", href: "/transactions" },
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  { icon: Target, label: "Goals", href: "/goals" },
  { icon: PiggyBank, label: "Savings", href: "/savings" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between hidden md:flex min-h-screen">
      <div>
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">F</span>
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">FinSet</span>
        </div>

        <nav className="mt-6 px-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700 font-medium"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "text-indigo-600" : "text-gray-400"}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 space-y-1 mb-4">
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-400" />
          Help
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors">
          <LogOut className="w-5 h-5 text-gray-400" />
          Log out
        </button>
      </div>
    </aside>
  );
};
