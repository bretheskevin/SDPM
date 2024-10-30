"use client";

import { Loader } from "@/components/Loader";
import { useScopedI18n } from "@/locales/client";
import { refreshPlaylists, usePlaylistsStore } from "@/stores/playlists.store";
import { Button } from "@/components/ui/button";

export const BaseAction = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = usePlaylistsStore();
  const scopedT = useScopedI18n("dashboard");

  return isLoading ? (
    <Loader text={scopedT("loadingPlaylists")} />
  ) : (
    <div>
      {children}
      <div className={"text-center"}>
        <Button onClick={refreshPlaylists} variant={"link"} className={"mt-2"}>
          {scopedT("refreshPlaylists")}
        </Button>
      </div>
    </div>
  );
};
