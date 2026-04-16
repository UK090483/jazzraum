import { getPastConcerts } from "@/lib/concerts";
import ArchiveHero from "./ArchiveHero";
import MonthGroup from "./MonthGroup";
import { Text } from "./Text";

export default function Archive() {
  const sortedConcerts = [...getPastConcerts()].sort(
    (a, b) => b.date.getTime() - a.date.getTime(),
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ArchiveHero />
      <div className="space-y-16">
        {Object.entries(concertsByMonth).map(([monthYear, concerts]) => (
          <MonthGroup
            key={monthYear}
            monthYear={monthYear}
            concerts={concerts}
          />
        ))}
      </div>
      <div className="mt-16 bg-background border-2 border-primary/30 p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
        <div className="absolute top-0 right-0 w-2 h-full bg-primary" />
        <Text variant="body" as="p" className="uppercase tracking-wide">
          Newsletter // Updates // Never miss a session
        </Text>
      </div>
    </div>
  );
}
