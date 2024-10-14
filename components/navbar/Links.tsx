"use client";

import { useScopedI18n } from "@/locales/client";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/stores/user.store";
import { LinkItem } from "@/components/navbar/LinkItem";
import { useApiHealthStore } from "@/stores/api-health.store";

interface Link {
  href: string;
  label: string;
  needAuth?: boolean;
}

export function Links() {
  const scopedT = useScopedI18n("navbar");
  const pathName = usePathname();

  const authenticated = useUserStore((state) => state.authenticated);
  const isApiUp = useApiHealthStore((state) => state.health);

  const links: Link[] = [
    {
      href: "/",
      label: scopedT("home"),
    },
    {
      href: "/dashboard",
      label: scopedT("dashboard"),
      needAuth: true,
    },
  ];

  return (
    <>
      {links
        .filter((link) => !link.needAuth || (isApiUp && authenticated))
        .map((link) => (
          <LinkItem
            key={link.href}
            href={link.href}
            label={link.label}
            pathName={pathName}
          />
        ))}
    </>
  );
}
