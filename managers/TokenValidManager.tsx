"use client";

import React, { useEffect } from "react";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { useUserStore } from "@/stores/user.store";
import { Cookies } from "@/services/cookie.service";
import { useRouter } from "next/navigation";

export const TokenValidManager: React.FC = () => {
  const setAuthenticated = useUserStore((state) => state.setAuthenticated);
  const router = useRouter();

  const checkToken = async () => {
    const authenticated = useUserStore.getState().authenticated;
    if (!authenticated) return;

    const isValid: boolean = await SoundcloudApiService.checkToken();
    setAuthenticated(isValid);

    if (!isValid) {
      Cookies.remove("token");
      router.push("/");
    }
  };

  useEffect(() => {
    checkToken();

    const intervalId = setInterval(checkToken, 30000); // Check token every 30 seconds
    return () => clearInterval(intervalId);
  }, [setAuthenticated]);

  return null;
};
