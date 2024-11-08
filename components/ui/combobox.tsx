"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FormItem } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { useI18n } from "@/locales/client";

export type ComboboxOption = {
  value: string;
  label: string;
};

type ComboboxProps = {
  options: ComboboxOption[];
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
  buttonClassName?: string;
  form?: UseFormReturn<any>;
  name?: string;
  keySuffix?: string;
};

export const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(function Combobox(
  {
    options,
    value,
    onChange,
    placeholder = "Select option...",
    searchPlaceholder = "Search...",
    emptyMessage = "No option found.",
    className,
    buttonClassName,
    name,
    form,
    keySuffix,
  },
  ref
) {
  const [open, setOpen] = React.useState(false);
  const t = useI18n();
  searchPlaceholder = t("global.search") + "...";

  const handleSelect = (currentValue: string) => {
    onChange(currentValue === value ? "" : currentValue);
    setOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <FormItem>
      <Popover modal={true} open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref} // Attach the ref to the button
            variant="white"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input px-3 py-2 text-sm font-normal shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
              buttonClassName
            )}
          >
            {selectedOption ? selectedOption.label : <span className="text-muted-foreground">{placeholder}</span>}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("w-[200px] p-0", className)}>
          <Command>
            {form && name ? (
              <CommandInput placeholder={searchPlaceholder} className="h-9" {...form.register(name)} />
            ) : (
              <CommandInput placeholder={searchPlaceholder} className="h-9" />
            )}
            <CommandList className="h-72">
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              {options.map((option) => (
                <CommandItem
                  key={`${option.value}${keySuffix || ""}`}
                  value={option.label}
                  onSelect={() => handleSelect(option.value)}
                  className="cursor-pointer"
                >
                  {option.label}
                  <CheckIcon className={cn("ml-auto h-4 w-4", value === option.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </FormItem>
  );
});
