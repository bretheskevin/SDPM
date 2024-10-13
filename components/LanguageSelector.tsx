"use client"

import {useEffect, useState} from "react"
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Globe} from "lucide-react"
import {usePathname} from "next/navigation";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
]

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState("en")
  const pathName = usePathname()

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode)

    const segments = pathName.split('/')
    segments[1] = langCode;
    const newPath = segments.join('/');
    window.location.pathname = newPath;
  }

  useEffect(() => {
    const path = window.location.pathname.split("/")[1]
    if (path) {
      const langCode = languages.find((lang) => lang.code === path)?.code
      if (langCode) {
        setCurrentLanguage(langCode)
      }
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 px-0">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
            {currentLanguage === lang.code && (
              <span className="ml-auto">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}