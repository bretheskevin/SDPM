"use client";

import { useQueryState } from "nuqs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type FilterOption = "all" | "public" | "private";

export const ProfileTrackFilter = () => {
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
        Filter Tracks
      </Label>
      <Select value={filter} onValueChange={handleFilterChange}>
        <SelectTrigger id="track-filter" className="w-[180px]">
          <SelectValue placeholder="Select filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Tracks</SelectItem>
          <SelectItem value="public">Public Tracks</SelectItem>
          <SelectItem value="private">Private Tracks</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
