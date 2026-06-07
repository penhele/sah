"use client";

import { useSavings } from "@/features/saving/hooks/use-savings";

export default function LoginPage() {
  const { data } = useSavings();

  console.log(data);

  return (
    <div className="">
      <div className="">halo dunia</div>
    </div>
  );
}
