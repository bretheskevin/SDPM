import Link from "next/link";
import { cn } from "@/lib/utils";
import { useNavbarStore } from "@/stores/navbar.store";

interface LinkProps {
  href: string;
  label: string;
  pathName: string;
}

export function LinkItem({ href, label, pathName }: LinkProps) {
  const close = useNavbarStore((state) => state.close);

  const className = cn("text-sm font-medium hover:underline underline-offset-4", {
    underline: isActive(pathName, href),
  });

  const handleClick = () => {
    close();
  };

  return (
    <Link key={href} className={className} href={href} onClick={handleClick}>
      {label}
    </Link>
  );
}

const isActive = (pathName: string, path: string) => {
  return pathName === path;
};
