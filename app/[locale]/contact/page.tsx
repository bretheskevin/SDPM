"use client";

import React from "react";
import { Github, Instagram, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useScopedI18n } from "@/locales/client";
import { ContactService } from "@/services/contact/contact.service";

export default function ContactPage() {
  const scopedT = useScopedI18n("contact");
  const { emitToast } = useToast();

  const instagram = ContactService.getContactByType("instagram");
  const discord = ContactService.getContactByType("discord");
  const github = ContactService.getContactByType("github");
  const linkedin = ContactService.getContactByType("linkedin");

  return (
    <div className="container mx-auto max-w-lg py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">{scopedT("title")}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">{scopedT("description")}</p>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">{scopedT("contactForm")}</h2>
        <form action="https://submit-form.com/ZkbjdFTq8" className="space-y-4">
          <Input placeholder={scopedT("namePlaceholder")} name={"name"} required />
          <Input type="email" placeholder={scopedT("emailPlaceholder")} name={"email"} required />{" "}
          <Textarea placeholder={scopedT("messagePlaceholder")} name={"message"} required />
          <Button type="submit" className="w-full">
            {scopedT("sendMessage")}
          </Button>
        </form>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">{scopedT("socialMedia")}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={instagram.link} passHref target="_blank">
            <Button variant="white" className="flex items-center">
              <Instagram className="mr-2 h-4 w-4 text-primary" />
              {instagram.label}
            </Button>
          </Link>
          <Button
            variant="white"
            className="flex items-center"
            onClick={() => {
              navigator.clipboard.writeText(discord.value!);
              emitToast(scopedT("toast.copiedToClipboard"), scopedT("toast.discordDescription"));
            }}
          >
            <MessageSquare className="mr-2 h-4 w-4 text-primary" />
            {discord.label}
          </Button>
          <Link href={github.link} passHref target="_blank">
            <Button variant="white" className="flex items-center">
              <Github className="mr-2 h-4 w-4 text-primary" />
              {github.label}
            </Button>
          </Link>
          <Link href={linkedin.link} passHref target="_blank">
            <Button variant="white" className="flex items-center">
              <Linkedin className="mr-2 h-4 w-4 text-primary" />
              {linkedin.label}
            </Button>
          </Link>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        <h2 className="mb-2 text-lg font-semibold">{scopedT("directContact")}</h2>
        <p>{scopedT("contactInfo")}</p>
        <a href={"mailto:contact@bretheskevin.fr"} className="text-primary">
          contact@bretheskevin.com
        </a>
      </div>
    </div>
  );
}
