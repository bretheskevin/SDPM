"use client";

import {useScopedI18n} from "@/locales/client";
import {usePathname} from "next/navigation";
import {useUserStore} from "@/stores/user.store";
import {LinkItem} from "@/components/navbar/LinkItem";
import {useApiHealthStore} from "@/stores/api-health.store";

interface Link {
  href: string;
  label: string;
  needToken?: boolean;
}

export function Links() {
  const scopedT = useScopedI18n("navbar");
  const pathName = usePathname();

  const token = useUserStore((state) => state.token);
  const isApiUp = useApiHealthStore((state) => state.health);

  const links: Link[] = [
    {
      href: "/",
      label: scopedT("home"),
    },
    {
      href: "/dashboard",
      label: scopedT("dashboard"),
      needToken: true,
    },
  ];

  return (
    <>
      {links
        .filter((link) => !link.needToken || (token && isApiUp))
        .map((link) => (
          <LinkItem key={link.href} href={link.href} label={link.label} pathName={pathName} />
        ))}
    </>
  );
}
