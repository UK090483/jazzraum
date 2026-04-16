"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Text } from "./Text";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b-2 border-primary bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-3 group">
            <Text variant="h1">JAzZRaUM</Text>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/" className="transition-all">
              <Text
                variant="nav"
                as="span"
                className={
                  pathname === "/"
                    ? "text-primary border-b-2 border-primary"
                    : "text-primary/60 hover:text-primary border-b-2 border-transparent hover:border-primary"
                }
              >
                Live
              </Text>
            </Link>
            <Link href="/archiv" className="transition-all">
              <Text
                variant="nav"
                as="span"
                className={
                  pathname === "/archiv"
                    ? "text-primary border-b-2 border-primary"
                    : "text-primary/60 hover:text-primary border-b-2 border-transparent hover:border-primary"
                }
              >
                Archiv
              </Text>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
