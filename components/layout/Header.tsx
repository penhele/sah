"use client";

import { Bell, Search, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="h-20 bg-white/50 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Analytics</h1>
        <p className="text-sm text-gray-500">Detailed overview of your financial situation</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 w-64 transition-all"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="h-8 w-px bg-gray-200 mx-2"></div>

          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <Avatar className="w-10 h-10 border-2 border-white shadow-sm">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-semibold text-gray-900">Adaline Lively</span>
              <span className="text-xs text-gray-500">adalineal@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
