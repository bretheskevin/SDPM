"use client";

import { Button } from "@/components/ui/button";
import { SmileIcon } from "lucide-react";
import Link from "next/link";
import { useUserStore } from "@/stores/user.store";
import { Cookies } from "@/services/cookie.service";
import { useI18n, useScopedI18n } from "@/locales/client";

export function AuthenticatedUser() {
  const t = useI18n();
  const scopedT = useScopedI18n("authenticatedUser");
  const setAuthenticated = useUserStore((state) => state.setAuthenticated);

  const handleLogout = () => {
    Cookies.remove("token");
    setAuthenticated(false);
  };

  return (
    <div className="mx-auto max-w-md text-center">
      <div className="mb-4 inline-block rounded-full bg-green-100 p-3 dark:bg-green-900">
        <SmileIcon className="h-10 w-10 text-green-500 dark:text-green-300" />
      </div>
      <h2 className="mb-4 text-2xl font-bold">{scopedT("title")}</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">{scopedT("description")}</p>
      <Button asChild className="mb-4 w-full">
        <Link href="/dashboard">{scopedT("dashboardButton")}</Link>
      </Button>
      <button
        onClick={handleLogout}
        className="text-sm text-gray-500 underline hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        {t("global.button.logout")}
      </button>
    </div>
  );
}
