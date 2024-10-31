import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getI18n, getScopedI18n } from "@/locales/server";

export default async function PrivacyPage() {
  const t = await getI18n();
  const scopedT = await getScopedI18n("privacy");

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 sm:mb-8 sm:h-20 sm:w-20">
          <Shield className="h-8 w-8 text-primary sm:h-10 sm:w-10" />
        </div>
        <h1 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">{scopedT("title")}</h1>
        <div className="prose dark:prose-invert mx-auto">
          <p className="mb-4 text-base text-gray-600 dark:text-gray-300 sm:mb-6 sm:text-lg">{scopedT("description")}</p>
          <h2 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">{scopedT("weDoNotCollectAnyData")}</h2>
          <div className="mb-6 rounded-lg border border-primary/10 bg-primary/5 p-4 sm:mb-8 sm:p-6">
            <p className="mb-3 text-base sm:mb-4 sm:text-lg">{scopedT("weDoNotCollectAnyDataDescription")}</p>
            <p className="mb-3 text-base sm:mb-4 sm:text-lg">{scopedT("whenUsing")}</p>
            <ul className="sm:text-ld mb-3 list-inside list-disc text-left text-base sm:mb-4">
              {["noPersonalInformation", "noUsageData", "noCookies", "noDataShared"].map((item, index) => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                <li key={index}>{scopedT(item)}</li>
              ))}
            </ul>
            <p className="text-base sm:text-lg">{scopedT("tokenNeeded")}</p>
          </div>
          <p className="mb-6 text-xs text-gray-500 dark:text-gray-400 sm:mb-8 sm:text-sm">
            {scopedT("lastUpdated", {
              date: new Date("2024-10-13").toLocaleDateString(),
            })}
          </p>
          <Button asChild>
            <Link href="/">{t("global.button.backToHome")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
