"use client";

import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Modal = () => {
  const { isOpen, closeModal, data } = useModal();

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-h-[85vh] overflow-hidden sm:max-w-[425px] md:max-w-lg">
        <ScrollArea className="max-h-[calc(85vh-4rem)]">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl">{data?.title}</DialogTitle>
            <DialogDescription className="text-wrap text-sm sm:text-base">{data?.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 px-4">{data?.children}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
