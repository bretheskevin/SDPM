"use client";

import { DashboardActionCard } from "@dashboard/DashboardActionCard";
import { useScopedI18n } from "@/locales/client";
import { createActions } from "@dashboard/action-list";
import { usePlaylistsStore } from "@/stores/playlists.store";
import { useEffect } from "react";

export const DashboardActionList = () => {
  const actionsT = useScopedI18n("dashboard.actions");
  const loadPlaylists = usePlaylistsStore((state) => state.loadPlaylists);

  useEffect(() => {
    loadPlaylists();
  }, [loadPlaylists]);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {createActions(actionsT).map((action) => (
        <DashboardActionCard key={action.key} action={action} />
      ))}
    </div>
  );
};
