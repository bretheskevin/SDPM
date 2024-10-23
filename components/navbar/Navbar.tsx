"use client";

import { Headphones, LogOut } from "lucide-react";
import Link from "next/link";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Links } from "@/components/navbar/Links";
import { useUserStore } from "@/stores/user.store";
import { Cookies } from "@/services/cookie.service";
import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const t = useI18n();
  const isAuthenticated = useUserStore((state) => state.authenticated);
  const setAuthenticated = useUserStore((state) => state.setAuthenticated);

  const handleLogout = () => {
    Cookies.remove("token");
    setAuthenticated(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 flex h-14 items-center border-b bg-white px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <Headphones className="h-6 w-6" />
        <span className="ml-2 block text-lg font-semibold sm:hidden">SDPM</span>
        <span className="ml-2 hidden text-lg font-semibold sm:inline">SoundCloud DJ Playlist Manager</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Links />
        <LanguageSelector />
        {isAuthenticated && (
          <Button
            variant="ghost"
            size="auto"
            onClick={handleLogout}
            title={t("global.button.logout")}
            aria-label={t("global.button.logout")}
          >
            <LogOut className="h-5 w-5" />
          </Button>
        )}
      </nav>
    </header>
  );
}
