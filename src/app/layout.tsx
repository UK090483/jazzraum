import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import JazzMode from "./components/JazzMode";

export const metadata: Metadata = {
  title: "Jazzraum HH",
  description: "Underground Jazz // Hamburg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen text-primary">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <JazzMode />
      </body>
    </html>
  );
}
