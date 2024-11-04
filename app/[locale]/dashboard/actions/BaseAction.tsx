"use client";

import { Loader } from "@/components/Loader";
import { useScopedI18n } from "@/locales/client";
import { usePlaylistsStore } from "@/stores/playlists.store";
import { Button } from "@/components/ui/button";

export const BaseAction = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, loadPlaylists } = usePlaylistsStore();
  const scopedT = useScopedI18n("dashboard");

  return isLoading ? (
    <Loader text={scopedT("loadingPlaylists")} />
  ) : (
    <div>
      {children}
      <div className={"text-center"}>
        <Button
          onClick={() => {
            loadPlaylists(true);
          }}
          variant={"link"}
          className={"mt-2"}
        >
          {scopedT("refreshPlaylists")}
        </Button>
      </div>
    </div>
  );
};
