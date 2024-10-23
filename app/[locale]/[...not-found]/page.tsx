import Link from "next/link";
import { ArrowLeft, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getI18n, getScopedI18n } from "@/locales/server";

export default async function NotFound() {
  const t = await getI18n();
  const scopedT = await getScopedI18n("notFound");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <Headphones className="mb-6 h-16 w-16 text-primary" />
      <h1 className="mb-2 text-4xl font-bold">{scopedT("title")}</h1>
      <p className="mb-8 text-xl text-muted-foreground">{scopedT("description")}</p>
      <Button asChild>
        <Link href="/" className="inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("global.button.backToHome")}
        </Link>
      </Button>
    </div>
  );
}
