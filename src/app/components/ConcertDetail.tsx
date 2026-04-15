import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { currentConcerts, pastConcerts } from "../data/concerts";
import { Text } from "./Text";
import ConcertHero from "./ConcertHero";
import ConcertBody from "./ConcertBody";
import ConcertInfo from "./ConcertInfo";

export default function ConcertDetail() {
  const { concertId } = useParams();
  const navigate = useNavigate();

  const allConcerts = [...currentConcerts, ...pastConcerts];
  const concert = allConcerts.find((c) => c.id === concertId);

  if (!concert) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Text variant="h3" as="h2" className="mb-4">
          404
        </Text>
        <Text variant="body" className="mb-8">
          Konzert nicht gefunden
        </Text>
        <Link
          to="/"
          className="text-primary hover:text-primary/80 uppercase font-bold"
        >
          ← Zurück
        </Link>
      </div>
    );
  }

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
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-bold uppercase text-sm group"
        >
          <ArrowLeft
            className="size-5 group-hover:-translate-x-1 transition-transform"
            strokeWidth={3}
          />
          Back
        </button>
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
