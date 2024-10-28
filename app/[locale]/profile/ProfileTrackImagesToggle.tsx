"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { parseAsBoolean, useQueryState } from "nuqs";

export const ProfileTrackImagesToggle = () => {
  const [hideImages, setHideImages] = useQueryState("hideImages", parseAsBoolean.withDefault(false));
  return (
    <div className="mb-4 flex items-center justify-end space-x-2">
      <Switch id="show-images" checked={hideImages} onCheckedChange={setHideImages} />
      <Label htmlFor="show-images">Hide Images</Label>
    </div>
  );
};
