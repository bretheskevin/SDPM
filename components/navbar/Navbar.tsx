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
    <header className="px-4 lg:px-6 h-14 flex items-center border-b fixed top-0 left-0 right-0 bg-white">
      <Link className="flex items-center justify-center" href="/public">
        <Headphones className="h-6 w-6" />
        <span className="block sm:hidden ml-2 text-lg font-semibold">SDPM</span>
        <span className="hidden sm:inline ml-2 text-lg font-semibold">
          SoundCloud DJ Playlist Manager
        </span>
      </Link>
      <nav className="flex items-center ml-auto gap-4 sm:gap-6">
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
