import { getScopedI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getScopedI18n("metadata.privacy");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
