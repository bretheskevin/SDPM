import Link from "next/link";
import { ArrowLeft, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getI18n, getScopedI18n } from "@/locales/server";

export default async function NotFound() {
  const t = await getI18n();
  const scopedT = await getScopedI18n("notFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center">
      <Headphones className="h-16 w-16 text-primary mb-6" />
      <h1 className="text-4xl font-bold mb-2">{scopedT("title")}</h1>
      <p className="text-xl text-muted-foreground mb-8">
        {scopedT("description")}
      </p>
      <Button asChild>
        <Link href="/" className="inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("global.button.backToHome")}
        </Link>
      </Button>
    </div>
  );
}
