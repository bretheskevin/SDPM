import ProtectedRoute from "@/helpers/ProtectedRoute";
import { getScopedI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getScopedI18n("metadata.dashboard");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
