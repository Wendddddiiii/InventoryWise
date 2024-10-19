"use client";

import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import CardExpenseSummary from './CardExpenseSummary';
import StatCard from "./StatCard";
import { Package, TrendingDown, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard 
        title = "Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="11 - 21 Oct 2024"
        details={[
          {title: "Customer Growth", amount:"368.00", changePercentage:131, IconComponent: TrendingUp,},
          {title: "Expenses", amount:"100.00", changePercentage:-20, IconComponent: TrendingDown,},
        ]}
      />
    </div>
  )
}

export default Dashboard;