"use client";

import { useMe } from "@/features/user/hooks/use-me";

export default function Header() {
  const { data: me } = useMe();

  return (
    <div className="border-b sticky top-0 p-4 backdrop-blur-md z-30 flex flex-row justify-between h-20 bg-transparent">
      <div className="">
        <h1 className="font-semibold text-xl">Sah</h1>
        <p className="text-sm text-muted-foreground">
          Website pencatatan keuangan
        </p>
      </div>

      <div className="flex flex-row space-x-4 items-center justify-center">
        <div className="aspect-square rounded-full h-full flex items-center justify-center bg-indigo-200">
          <span className="text-indigo-600 font-bold">{me?.name[0]}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold">{me?.name}</span>
          <span className="text-xs text-muted-foreground">{me?.email}</span>
        </div>
      </div>
    </div>
  );
}
