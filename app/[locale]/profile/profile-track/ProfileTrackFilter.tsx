"use client";

import { useQueryState } from "nuqs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useScopedI18n } from "@/locales/client";

type FilterOption = "all" | "public" | "private";

export const ProfileTrackFilter = () => {
  const scopedT = useScopedI18n("profile.filter");

  const [filter, setFilter] = useQueryState<FilterOption>("filter", {
    defaultValue: "all",
    parse: (value) => (["all", "public", "private"].includes(value) ? (value as FilterOption) : "all"),
  });

  const handleFilterChange = (value: FilterOption) => {
    setFilter(value);
  };

  return (
    <div className="mb-4">
      <Label htmlFor="track-filter" className="mb-2 block text-sm font-medium">
        {scopedT("title")}
      </Label>
      <div className={"bg-white"}>
        <Select value={filter} onValueChange={handleFilterChange}>
          <SelectTrigger id="track-filter" className="w-[180px]">
            <SelectValue placeholder="Select filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{scopedT("all")}</SelectItem>
            <SelectItem value="public">{scopedT("public")}</SelectItem>
            <SelectItem value="private">{scopedT("private")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
