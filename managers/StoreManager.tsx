import React from "react";
import { ApiHealthManager } from "@/managers/ApiHealthManager";
import { TokenValidManager } from "@/managers/TokenValidManager";

export const StoreManager = () => {
  return (
    <>
      <ApiHealthManager />
      <TokenValidManager />
    </>
  );
};
