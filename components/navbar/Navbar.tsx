"use client";

import { Headphones, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { LanguageSelector } from "@/components/navbar/LanguageSelector";
import { Links } from "@/components/navbar/Links";
import { useUserStore } from "@/stores/user.store";
import { useNavbarStore } from "@/stores/navbar.store";
import { Cookies } from "@/services/cookie.service";
import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function Navbar() {
  const t = useI18n();
  const isAuthenticated = useUserStore((state) => state.authenticated);
  const setAuthenticated = useUserStore((state) => state.setAuthenticated);
  const { isOpen, toggle, close } = useNavbarStore();

  const handleLogout = () => {
    Cookies.remove("token");
    setAuthenticated(false);
    close();
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 flex h-14 items-center border-b bg-white px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <Headphones className="h-6 w-6" />
        <span className="ml-2 text-lg font-semibold">
          <span className="sm:hidden">SDPM</span>
          <span className="hidden sm:inline">SoundCloud DJ Playlist Manager</span>
        </span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <div className="hidden items-center gap-4 sm:gap-6 md:flex">
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
        </div>
        <Sheet open={isOpen} onOpenChange={toggle} aria-describedby={"menu"}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <SheetTitle aria-label="Menu" />
            <SheetDescription />

            <div className="flex flex-col gap-4 py-4">
              <Links />

              <Separator />

              <LanguageSelector />

              <Separator />

              {isAuthenticated && (
                <Button variant="ghost" size="auto" onClick={handleLogout} className="justify-start">
                  <LogOut className="mr-2 h-5 w-5" />
                  {t("global.button.logout")}
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
