import { getScopedI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getScopedI18n("metadata.contact");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
