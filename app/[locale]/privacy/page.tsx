import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getI18n, getScopedI18n } from "@/locales/server";

export default async function PrivacyPage() {
  const t = await getI18n();
  const scopedT = await getScopedI18n("privacy");

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-primary/10">
          <Shield className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-6">{scopedT("title")}</h1>
        <div className="prose dark:prose-invert mx-auto">
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
            {scopedT("description")}
          </p>
          <h2 className="text-3xl font-semibold mb-6">
            {scopedT("weDoNotCollectAnyData")}
          </h2>
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
            <p className="mb-4">
              {scopedT("weDoNotCollectAnyDataDescription")}
            </p>
            <p className="mb-4">{scopedT("whenUsing")}</p>
            <ul className="list-disc list-inside mb-4 text-left">
              {[
                "noPersonalInformation",
                "noUsageData",
                "noCookies",
                "noDataShared",
              ].map((item, index) => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                <li key={index}>{scopedT(item)}</li>
              ))}
            </ul>
            <p>{scopedT("tokenNeeded")}</p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
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
