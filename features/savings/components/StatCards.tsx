"use client";

import { useGetSavingsStats } from "../hooks/useSavings";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Target,
  TrendingUp,
} from "lucide-react";
import { useSavings } from "../hooks/use-savings";

export const StatCards = () => {
  const { data, isLoading } = useGetSavingsStats();

  const { data: savings } = useSavings();
  console.log(savings);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);

  if (isLoading || !data) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-32 rounded-2xl w-full" />
        <Skeleton className="h-32 rounded-2xl w-full" />
        <Skeleton className="h-32 rounded-2xl w-full" />
      </div>
    );
  }

  const isGrowthPositive = data.growthPercentage >= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="rounded-2xl border-none shadow-sm relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Wallet size={80} />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">
              Total Tabungan
            </h3>
            <div className="p-2 bg-indigo-50 rounded-xl">
              <Wallet className="w-5 h-5 text-indigo-600" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-gray-900">
              {formatCurrency(data.totalBalance)}
            </span>
            <span className="text-xs text-gray-500 mt-1">
              Akumulasi seluruh tabungan pernikahan
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-none shadow-sm relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <TrendingUp size={80} />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">
              Pemasukan Bulan Ini
            </h3>
            <div className="p-2 bg-green-50 rounded-xl">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold text-gray-900">
              {formatCurrency(data.totalIncomeThisMonth)}
            </span>
            <div className="flex items-center gap-2">
              <span
                className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${
                  isGrowthPositive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {isGrowthPositive ? (
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 mr-1" />
                )}
                {Math.abs(data.growthPercentage).toFixed(1)}%
              </span>
              <span className="text-xs text-gray-400">vs bulan lalu</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-none shadow-sm relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Target size={80} />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">
              Target Menabung
            </h3>
            <div className="p-2 bg-orange-50 rounded-xl">
              <Target className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="text-3xl font-bold text-gray-900">85%</span>
              <span className="text-xs text-gray-500 mb-1">
                dari {formatCurrency(100000000)}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
