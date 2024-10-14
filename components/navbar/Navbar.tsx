import {Headphones} from "lucide-react";
import Link from "next/link";
import {LanguageSelector} from "@/components/LanguageSelector";
import {Links} from "@/components/navbar/Links";

export function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b fixed top-0 left-0 right-0 bg-white">
      <Link className="flex items-center justify-center" href="/public">
        <Headphones className="h-6 w-6"/>
        <span className="block sm:hidden ml-2 text-lg font-semibold">SDPM</span>
        <span className="hidden sm:inline ml-2 text-lg font-semibold">SoundCloud DJ Playlist Manager</span>
      </Link>
      <nav className={"flex items-center ml-auto flex gap-4 sm:gap-6"}>
        <Links />
        <LanguageSelector />
      </nav>
    </header>
  );
}
