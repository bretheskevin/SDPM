"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useNavbarStore } from "@/stores/navbar.store";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
] as const;

export function LanguageSelector() {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  const pathName = usePathname();
  const router = useRouter();
  const close = useNavbarStore((state) => state.close);

  const handleLanguageChange = (langCode: locales) => {
    try {
      changeLocale(langCode);
      router.refresh();

      const segments = pathName.split("/");
      segments[1] = langCode;
      const newPath = segments.join("/");

      router.push(newPath);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  const onSwitchLanguageClick = async (code: locales) => {
    handleLanguageChange(code);
    close();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 px-0">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => onSwitchLanguageClick(lang.code)}>
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
            {currentLocale === lang.code && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
