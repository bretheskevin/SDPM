"use client";

import { DashboardActionCard } from "@dashboard/DashboardActionCard";
import { actions } from "@dashboard/action-list";

export const DashboardActionList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {actions.map((action) => (
        <DashboardActionCard key={action.key} action={action} />
      ))}
    </div>
  );
};
