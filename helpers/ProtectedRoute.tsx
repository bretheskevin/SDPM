"use client";

import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/user.store";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useUserStore((state) => state.authenticated);

  useEffect(() => {
    if (isAuthenticated) return;

    // Redo a request to avoid redirection on page reload
    SoundcloudApiService.checkToken().then((isValid) => {
      if (!isValid) {
        router.push("/");
      }
    });
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
