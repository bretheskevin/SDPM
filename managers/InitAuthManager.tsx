"use client";

import { useUserStore } from "@/stores/user.store";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { useEffect } from "react";

export const InitAuthManager = () => {
  const setAuthenticated = useUserStore((state) => state.setAuthenticated);

  const isAuthenticated = async () => {
    const isValid: boolean = await SoundcloudApiService.checkToken();
    setAuthenticated(isValid);
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return null;
};
