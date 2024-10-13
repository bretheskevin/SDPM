import {getScopedI18n} from "@/locales/server";

export async function Footer() {
  const scopedT = await getScopedI18n('footer')

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">{scopedT("rights")}</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:underline underline-offset-4" href="/privacy">
          {scopedT("privacy")}
        </a>
      </nav>
    </footer>
  )
}
