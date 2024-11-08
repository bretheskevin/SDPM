"use client";

import React from "react";
import { AlertTriangle, Instagram } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useScopedI18n } from "@/locales/client";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

export default function ApiDownNotice() {
  const scopedT = useScopedI18n("serviceUnavailable");
  const { toast } = useToast();

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-8 text-center">
        <div className="mb-4 inline-block rounded-full bg-yellow-500/10 p-3">
          <AlertTriangle className="h-10 w-10 text-yellow-500" />
        </div>
        <h2 className="mb-2 text-2xl font-bold">{scopedT("title")}</h2>
        <p className="text-gray-500 dark:text-gray-400">{scopedT("description")}</p>
      </div>

      <Alert variant="warning" className="mb-6">
        <AlertTitle className="mb-2 text-lg font-semibold">{scopedT("alertTitle")}</AlertTitle>
        <AlertDescription>{scopedT("alertDescription")}</AlertDescription>
      </Alert>

      <div className="space-y-4">
        <p className="text-center font-medium">{scopedT("needAppBackUp")}</p>
        <div className="flex justify-center space-x-4">
          <Link href="https://www.instagram.com/kevin_brts" passHref target="_blank">
            <Button variant="outline" className="flex items-center">
              <Instagram className="mr-2 h-4 w-4 text-primary" />
              Instagram
            </Button>
          </Link>
          <Button
            variant="outline"
            className="flex items-center"
            onClick={() => {
              navigator.clipboard.writeText("hikudo");
              toast({
                title: scopedT("toast.copiedToClipboard"),
                description: scopedT("toast.discordDescription"),
                duration: 3000,
              });
            }}
          >
            <DiscordLogoIcon className="mr-2 h-4 w-4 text-primary" />
            Discord
          </Button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>{scopedT("contactInfo")}</p>
        <p>Instagram: @kevin_brts</p>
        <p>Discord: hikudo</p>
      </div>
    </div>
  );
}
