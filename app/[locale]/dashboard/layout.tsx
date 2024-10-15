import type { Metadata } from "next";
import ProtectedRoute from "@/helpers/ProtectedRoute";

export const metadata: Metadata = {
  title: "SDPM | Dashboard",
  description:
    "Dashboard for DJ Playlist Manager - Manage and create SoundCloud playlists effortlessly.",
};
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
