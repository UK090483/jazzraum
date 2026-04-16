import type { Concert } from "@/lib/concerts";
import ConcertCard from "./ConcertCard";
import { Text } from "./Text";

interface MonthGroupProps {
  monthYear: string;
  concerts: Concert[];
}

export default function MonthGroup({ monthYear, concerts }: MonthGroupProps) {
  return (
    <div>
      <Text
        variant="label"
        as="div"
        className="mb-8 inline-block bg-primary text-primary-foreground px-6 py-3 text-xl skew-x-[-2deg]"
      >
        {monthYear}
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {concerts.map((concert) => (
          <ConcertCard key={concert.id} concert={concert} />
        ))}
      </div>
    </div>
  );
}
