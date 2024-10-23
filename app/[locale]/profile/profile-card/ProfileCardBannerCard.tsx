import React from "react";
import { cn } from "@/lib/utils";

export const ProfileCardBannerCard = ({ children, className }: { children: React.ReactNode; className: string }) => {
  return <div className={cn("rounded-lg bg-background/90 p-4", className)}>{children}</div>;
};
