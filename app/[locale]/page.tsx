import { getScopedI18n } from "@/locales/server";
import { RightSectionContent } from "@/app/[locale]/RightSectionContent";

export default async function Home() {
  const scopedT = await getScopedI18n("landing");

  return (
    <main className={"flex flex-1 flex-col lg:flex-row"}>
      <section className="flex w-full flex-1 items-center justify-center py-12 md:py-24">
        <div className="my-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                DJ Playlist Manager
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">{scopedT("title")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-1 items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-800">
        <RightSectionContent />
      </section>
    </main>
  );
}
