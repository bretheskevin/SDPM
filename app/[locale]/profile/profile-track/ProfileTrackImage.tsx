"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Music } from "lucide-react";
import React from "react";
import { useQueryState } from "nuqs";
import Image from "next/image";

interface ProfileTrackImageProps {
  url: string | null;
  alt: string;
}

export const ProfileTrackImage = ({ url, alt }: ProfileTrackImageProps) => {
  const [hideImages] = useQueryState("hideImages");
  if (hideImages) return null;

  return <AspectRatio ratio={1}>{url ? <HasImageComponent url={url} alt={alt} /> : <NoImageComponent />}</AspectRatio>;
};

const HasImageComponent = ({ url, alt }: { url: string; alt: string }) => {
  return (
    <Image
      src={url.replace("-large", "-t500x500")}
      alt={alt}
      className="h-full w-full rounded-md object-cover"
      width={500}
      height={500}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto"
      }} />
  );
};

const NoImageComponent = () => {
  return (
    <div className="flex h-full items-center justify-center rounded-md bg-slate-100 text-slate-400">
      <Music className="h-12 w-12" />
    </div>
  );
};
