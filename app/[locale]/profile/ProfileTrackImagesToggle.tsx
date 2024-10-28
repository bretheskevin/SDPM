"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { parseAsBoolean, useQueryState } from "nuqs";
import { useScopedI18n } from "@/locales/client";

export const ProfileTrackImagesToggle = () => {
  const [hideImages, setHideImages] = useQueryState("hideImages", parseAsBoolean.withDefault(false));
  const scopedT = useScopedI18n("profile");

  return (
    <div className="mb-4 flex items-center justify-end space-x-2">
      <Switch id="show-images" checked={hideImages} onCheckedChange={setHideImages} />
      <Label htmlFor="show-images">{scopedT("hideImages")}</Label>
    </div>
  );
};
