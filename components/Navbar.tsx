"use client";

import {cn} from "@/lib/utils";
import {Headphones} from "lucide-react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {useScopedI18n} from "@/locales/client";
import {LanguageSelector} from "@/components/LanguageSelector";

export interface NavbarProps {
  isApiUp: boolean;
}

interface Link {
  href: string;
  label: string;
  needToken?: boolean;
}

export function Navbar({isApiUp}: NavbarProps = {isApiUp: true}) { // @TODO: use data from state
  const scopedT = useScopedI18n("navbar")
  const pathName = usePathname();

  const links: Link[] = [
    {
      href: "/",
      label: scopedT("home"),
    },
    {
      href: "/dashboard",
      label: scopedT("dashboard"),
      needToken: true
    },
  ];

  const isActive = (path: string) => {
    const parsedPath = pathName.split("/").slice(2).join("/");
    path = path.slice(1);

    return parsedPath === path;
  }

  const className = (path: string) =>
    cn("text-sm font-medium hover:underline underline-offset-4", {
      underline: isActive(path),
    });

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b fixed top-0 left-0 right-0 bg-white">
      <Link className="flex items-center justify-center" href="/">
        <Headphones className="h-6 w-6"/>
        <span className="block sm:hidden ml-2 text-lg font-semibold">SDPM</span>
        <span className="hidden sm:inline ml-2 text-lg font-semibold">SoundCloud DJ Playlist Manager</span>
      </Link>
      <nav className={"flex items-center ml-auto flex gap-4 sm:gap-6"}>

        {isApiUp && links.map((link) => (
          <Link key={link.href} className={className(link.href)} href={link.href}>
            {link.label}
          </Link>
        ))}
        <LanguageSelector />
      </nav>
    </header>
  );
}
