"use client";

import ServiceUnavailable from "@/app/[locale]/ServiceUnavailable";
import {useApiHealthStore} from "@/stores/api-health.store";
import {TokenForm} from "@/app/[locale]/TokenForm";

export function RightSectionContent() {
  const isApiUp: boolean = useApiHealthStore((state) => state.health);

  if (isApiUp) {
    return <TokenForm/>
  }

  return <ServiceUnavailable/>
}
