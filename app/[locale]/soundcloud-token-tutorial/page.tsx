import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Code } from "@/components/Code";
import { Metadata } from "next";
import { getScopedI18n } from "@/locales/server";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "SDPM | Token Tutorial",
  description:
    "Learn how to retrieve your SoundCloud token to manage your playlists.",
};

export default async function SoundCloudTokenTutorial() {
  const scopedT = await getScopedI18n("tutorial");

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">{scopedT("title")}</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{scopedT("step1.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {scopedT("step1.description", {
                link: (
                  <span>
                    <a
                      href="https://soundcloud.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      soundcloud.com
                    </a>
                    <ExternalLink className="inline h-4 w-4" />
                  </span>
                ),
                code: <Code>{scopedT("step1.inspectElement")}</Code>,
              })}
            </p>
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/tutorial/1.png"
                alt={scopedT("step1.imageAlt")}
                width={400}
                height={200}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{scopedT("step2.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {scopedT("step2.description", {
                code: <Code>Application</Code>,
              })}
            </p>
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/tutorial/2.png"
                alt={scopedT("step2.imageAlt")}
                width={400}
                height={200}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{scopedT("step3.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              {scopedT("step3.description", {
                cookies: <Code>Cookies</Code>,
                key: <Code>oauth_token</Code>,
              })}
            </p>
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/tutorial/3.png"
                alt={scopedT("step3.imageAlt")}
                width={400}
                height={200}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">{scopedT("note.title")}</h2>
        <p>{scopedT("note.description")}</p>
      </div>
    </div>
  );
}
