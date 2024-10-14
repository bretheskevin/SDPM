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
    <div className="max-w-md mx-auto text-center">
      <div className="inline-block p-3 rounded-full bg-green-100 dark:bg-green-900 mb-4">
        <SmileIcon className="h-10 w-10 text-green-500 dark:text-green-300" />
      </div>
      <h2 className="text-2xl font-bold mb-4">{scopedT("title")}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {scopedT("description")}
      </p>
      <Button asChild className="w-full mb-4">
        <Link href="/dashboard">{scopedT("dashboardButton")}</Link>
      </Button>
      <button
        onClick={handleLogout}
        className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 underline"
      >
        {t("global.button.logout")}
      </button>
    </div>
  );
}
