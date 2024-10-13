"use client"

import {useCallback, useEffect, useState} from "react"
import {usePathname, useRouter} from "next/navigation"
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Globe} from "lucide-react"

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
] as const

type LanguageCode = typeof LANGUAGES[number]["code"]

export function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>("en")

  const handleLanguageChange = useCallback((langCode: LanguageCode) => {
    const segments = pathname.split('/')
    segments[1] = langCode
    const newPath = segments.join('/')
    router.push(newPath)
  }, [pathname, router])

  useEffect(() => {
    const pathLang = pathname.split('/')[1] as LanguageCode
    if (LANGUAGES.some(lang => lang.code === pathLang)) {
      setCurrentLanguage(pathLang)
    }
  }, [pathname])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 px-0">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
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
