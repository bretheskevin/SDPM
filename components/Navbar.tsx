"use client"

import {cn} from "@/lib/utils";
import {Headphones} from "lucide-react";
import {usePathname} from "next/navigation";

export function Navbar() {
  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;

  const className = (path: string) => cn("text-sm font-medium hover:underline underline-offset-4", {"underline": isActive(path)});

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <a className="flex items-center justify-center" href="#">
        <Headphones className="h-6 w-6"/>
        <span className="ml-2 text-lg font-semibold">SoundCloud DJ</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className={className("/")} href="/">
          Home
        </a>
        <a className={className("/settings")} href="/settings">
          Settings
        </a>
      </nav>
    </header>
  )

}
