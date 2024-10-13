import type {Metadata} from "next"
import {Inter} from 'next/font/google'
import "./globals.css"
import {Navbar} from "@/components/Navbar"
import {Footer} from "@/components/Footer"
import {Providers} from "@/app/[locale]/providers";
import Favicon from "/public/favicon.ico"
import {Toaster} from "@/components/ui/toaster";
import {ApiService} from "@/services/api.service";
import {useApiHealthStore} from "@/stores/api-health.store";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "SDPM",
  description: "Manage and create SoundCloud playlists effortlessly",
  icons: [{ rel: "icon", url: Favicon.src }],
}

const isApiUp = async(): Promise<boolean> => {
  try {
    const response = await ApiService.get("health");
    return response.status === "healthy";
  } catch (error) {
    console.error("Error checking API status:", error);
    return false;
  }
}
export default async function RootLayout({
                                     children,
                                     params,
                                   }: Readonly<{
  children: React.ReactNode,
  params: {
    locale: string
  }
}>) {
  useApiHealthStore.getState().isApiUp = await isApiUp();

  return (
    <html lang="en">
    <body className={inter.className}>
    <Providers locale={params.locale}>
      <div className="flex flex-col min-h-screen bg-background pt-14">
        <Navbar isApiUp={useApiHealthStore.getState().isApiUp}/>
        <div className={"h-full flex flex-col flex-1"}>
          {children}
        </div>
        <Footer/>
      </div>
      <Toaster />
    </Providers>
    </body>
    </html>
  )
}
