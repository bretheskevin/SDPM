"use client";

import {PropsWithChildren} from "react";
import {I18nProviderClient} from "@/locales/client";
import {StoreManager} from "@/managers/StoreManager";

export const Providers = (props: PropsWithChildren<{locale: string}>) => {
  return (
    <I18nProviderClient locale={props.locale}>
      <StoreManager />
      {props.children}
    </I18nProviderClient>
  );
};
