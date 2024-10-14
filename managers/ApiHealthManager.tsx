"use client";

import React, { useEffect } from "react";
import { useApiHealthStore } from "@/stores/api-health.store";

export const ApiHealthManager: React.FC = () => {
  const checkHealth = useApiHealthStore((state) => state.checkHealth);

  useEffect(() => {
    checkHealth();
  }, [checkHealth]);

  return null;
};
