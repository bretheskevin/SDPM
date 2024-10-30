import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/providers/providers";
import { Toaster } from "@/components/ui/toaster";
import { StoreManager } from "@/managers/StoreManager";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Modal } from "@/components/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SDPM",
  description: "Manage and create SoundCloud playlists effortlessly",
  icons: [{ rel: "icon", url: "/public/favicon.icon" }],
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: {
      locale: string;
    };
  }>
) {
  const params = props.params;

  const { children } = props;

  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>
          <Providers locale={params.locale}>
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
