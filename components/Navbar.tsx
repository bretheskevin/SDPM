"use client";

import {cn} from "@/lib/utils";
import {Headphones} from "lucide-react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {useScopedI18n} from "@/locales/client"; // Import Link from Next.js

export function Navbar() {
  const scopedT = useScopedI18n("navbar")

  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;

  const className = (path: string) =>
    cn("text-sm font-medium hover:underline underline-offset-4", {
      underline: isActive(path),
    });

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <Headphones className="h-6 w-6"/>
        <span className="block sm:hidden ml-2 text-lg font-semibold">SDPM</span>
        <span className="hidden sm:inline ml-2 text-lg font-semibold">SoundCloud DJ Playlist Manager</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className={className("/")} href="/">
          {scopedT("home")}
        </Link>
      </nav>
    </header>
  );
}
