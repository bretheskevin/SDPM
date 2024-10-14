import Link from "next/link";
import {cn} from "@/lib/utils";

interface LinkProps {
  href: string;
  label: string;
  pathName: string;
}

export function LinkItem({ href, label, pathName }: LinkProps) {
  const className = cn("text-sm font-medium hover:underline underline-offset-4", {
    underline: isActive(pathName, href),
  });

  return (
    <Link key={href} className={className} href={href}>
      {label}
    </Link>
  );
}

const isActive = (pathName: string, path: string) => {
  const parsedPath = pathName.split("/").slice(2).join("/");
  path = path.slice(1);

  return parsedPath === path;
};
