import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/providers/providers";
import { Toaster } from "@/components/ui/toaster";
import { StoreManager } from "@/managers/StoreManager";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Modal } from "@/components/Modal";
import { getScopedI18n } from "@/locales/server";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const t = await getScopedI18n("metadata");
  return {
    title: t("title"),
    description: t("description"),
    icons: [{ rel: "icon", url: "/public/favicon.ico" }],
    keywords:
      "SDPM, SoundCloud, Playlists, Music, Streaming, Free, Open-Source, Musique, DJ, Audio Management," +
      " Music Creation, Playlist Manager, SoundCloud Tools, SoundCloud Management, Playlist Creation, " +
      "Audio Streaming, SoundCloud DJ, Music Library, Music Discovery, SoundCloud Playlist Manager, Playlist Editing," +
      " Free Music Tools, SoundCloud Integration, Open-Source Playlist, Streaming Management, Musique Gratuite, " +
      "Gestion de Musique, Gestionnaire de Playlist, Gestion SoundCloud, Musique en Streaming",
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ params, children }: Readonly<RootLayoutProps>) {
  const { locale } = await params;

  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>
          <Providers locale={locale}>
            <Modal />
            <StoreManager />
            <div className="flex min-h-screen flex-col bg-background bg-gray-50 pt-14">
              <Navbar />
              <div className={"flex h-full flex-1 flex-col"}>{children}</div>
              <Footer />
            </div>
            <Toaster />
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  );
}
