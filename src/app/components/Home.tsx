import { getCurrentConcerts } from "@/lib/concerts";
import HomeHero from "./HomeHero";
import ContactCta from "./ContactCta";
import HomeConcerts from "./HomeConcerts";

export default function Home() {
  const sortedConcerts = [...getCurrentConcerts()].sort(
    (a, b) => a.date.getTime() - b.date.getTime(),
  );

  const concertsByMonth = sortedConcerts.reduce(
    (acc, concert) => {
      const monthYear = concert.date.toLocaleDateString("de-DE", {
        year: "numeric",
        month: "long",
      });
      if (!acc[monthYear]) acc[monthYear] = [];
      acc[monthYear].push(concert);
      return acc;
    },
    {} as Record<string, typeof sortedConcerts>,
  );

  const monthEntries = Object.entries(concertsByMonth);
  const initialVisibleCount = Math.min(2, monthEntries.length);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <HomeHero />
      <HomeConcerts
        monthEntries={monthEntries}
        initialVisibleCount={initialVisibleCount}
      />
      <ContactCta />
    </div>
  );
}
