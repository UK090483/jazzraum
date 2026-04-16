import type { Concert } from "@/lib/concerts";
import { Text } from "./Text";
import ConcertHero from "./ConcertHero";
import ConcertBody from "./ConcertBody";
import ConcertInfo from "./ConcertInfo";
import BackButton from "./BackButton";

interface ConcertDetailProps {
  concert: Concert;
}

export default function ConcertDetail({ concert }: ConcertDetailProps) {
  const formattedDate = concert.date.toLocaleDateString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isPast = concert.date < new Date();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <BackButton />
      </div>
      <ConcertHero concert={concert} isPast={isPast} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ConcertBody concert={concert} />
          </div>
          <div className="lg:col-span-1">
            <ConcertInfo
              concert={concert}
              isPast={isPast}
              formattedDate={formattedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
