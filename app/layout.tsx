import type {Metadata} from "next"
import {Inter} from 'next/font/google'
import "./globals.css"
import {Navbar} from "@/components/Navbar"
import {Footer} from "@/components/Footer"

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "SCDJ Playlist Manager",
  description: "Manage and create SoundCloud playlists effortlessly",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar/>
      <div className={"h-full flex flex-col flex-1"}>
        {children}
      </div>
      <Footer/>
    </div>
    </body>
    </html>
  )
}
