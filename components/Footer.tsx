import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

export async function Footer() {
  const scopedT = await getScopedI18n("footer");

  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">{scopedT("rights")}</p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link className="text-xs underline-offset-4 hover:underline" href="/privacy">
          {scopedT("privacy")}
        </Link>
      </nav>
    </footer>
  );
}
