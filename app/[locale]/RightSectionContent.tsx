"use client";

import ServiceUnavailable from "@/app/[locale]/ServiceUnavailable";
import { useApiHealthStore } from "@/stores/api-health.store";
import { TokenForm } from "@/app/[locale]/TokenForm";
import { useUserStore } from "@/stores/user.store";
import { AuthenticatedUser } from "@/app/[locale]/AuthenticatedUser";

export function RightSectionContent() {
  const isApiUp: boolean = useApiHealthStore((state) => state.health);
  const isAuthenticated = useUserStore((state) => state.authenticated);

  if (!isApiUp) {
    return <ServiceUnavailable />;
  }

  if (isAuthenticated) {
    return <AuthenticatedUser />;
  }

  return <TokenForm />;
}
