import {TokenForm} from "./TokenForm";
import {getScopedI18n} from "@/locales/server";
import ServiceUnavailable from "./ServiceUnavailable";
import {useApiHealthStore} from "@/stores/api-health.store";

export default async function Home() {
  const scopedT = await getScopedI18n('landing')

  return (
    <main className={"flex flex-1 flex-col lg:flex-row"}>
      <section className="flex justify-center items-center flex-1 w-full py-12 md:py-24">
        <div className="px-4 md:px-6 my-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                DJ Playlist Manager
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {scopedT("title")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full flex-1 px-4 py-12 bg-gray-100 dark:bg-gray-800">

        {useApiHealthStore.getState().isApiUp ? (
          <TokenForm/>
          ) : (
          <ServiceUnavailable />
          )}
      </section>
    </main>
  );
}
