"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProfileTrackDescriptionProps {
  description: string | undefined;
}

export const ProfileTrackDescription = ({ description }: ProfileTrackDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDescription = (text: string) => {
    return text.split("\n").map((line: string, index: number) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  if (!description) return null;
  return (
    <div className="mt-2">
      <p className={`w-full text-sm text-gray-500 ${!isExpanded ? "line-clamp-4" : ""}`}>
        {formatDescription(description)}
      </p>
      <Button
        variant="ghost"
        size="sm"
        className="mt-1 h-8 px-2 text-xs text-gray-500 hover:text-gray-900"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <>
            Show Less
            <ChevronUp className="ml-1 h-3 w-3" />
          </>
        ) : (
          <>
            Show More
            <ChevronDown className="ml-1 h-3 w-3" />
          </>
        )}
      </Button>
    </div>
  );
};
