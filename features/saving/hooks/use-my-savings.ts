"use client";

import { useMemo } from "react";
import { useSavings } from "./use-savings";
import { useMe } from "@/features/user/hooks/use-me";

export function useMySavings() {
  const {
    data: savings = [],
    isLoading: isLoadingSavings,
    ...restSavings
  } = useSavings();
  const { data: me, isLoading: isLoadingMe, ...restMe } = useMe();

  const mySavings = useMemo(() => {
    if (!me?.id || !savings.length) return [];
    return savings.filter((item) => item.user?.id === me.id);
  }, [savings, me?.id]);

  // Hitung total tabungan milik user ini sekalian agar praktis jika nanti butuh
  const myTotalAmount = useMemo(() => {
    return mySavings.reduce((acc, item) => acc + Number(item.amount), 0);
  }, [mySavings]);

  return {
    data: mySavings,
    totalAmount: myTotalAmount,
    // Menggabungkan status loading dari kedua hooks
    isLoading: isLoadingSavings || isLoadingMe,
    me,
    ...restSavings, // berisi refetch, error, dll dari useSavings jika sewaktu-waktu butuh
  };
}
