import React from "react";
import { ApiHealthManager } from "@/managers/ApiHealthManager";
import { TokenValidManager } from "@/managers/TokenValidManager";
import { InitAuthManager } from "@/managers/InitAuthManager";

export const StoreManager = () => {
  return (
    <>
      <ApiHealthManager />
      <TokenValidManager />
      <InitAuthManager />
    </>
  );
};
