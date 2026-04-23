import { getAboutPage } from "@/lib/about";
import AboutPageContent from "../components/AboutPageContent";

export const metadata = {
  title: "Über uns – Jazzraum HH",
  description: "Underground Jazz // Hamburg seit 2019",
};

export default function UeberUnsPage() {
  const page = getAboutPage();
  return <AboutPageContent page={page} />;
}
