import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/providers/providers";
import Favicon from "/public/favicon.ico";
import { Toaster } from "@/components/ui/toaster";
import { StoreManager } from "@/managers/StoreManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SDPM",
  description: "Manage and create SoundCloud playlists effortlessly",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers locale={params.locale}>
          <StoreManager />
          <div className="flex flex-col min-h-screen bg-background pt-14">
            <Navbar />
            <div className={"h-full flex flex-col flex-1"}>{children}</div>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
