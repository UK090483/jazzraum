import { Calendar, Clock, MapPin, Euro, Timer, Music2 } from "lucide-react";
import type { Concert } from "../data/concerts";
import { Text } from "./Text";

interface ConcertInfoProps {
  concert: Concert;
  isPast: boolean;
  formattedDate: string;
}

function InfoRow({
  icon: Icon,
  label,
  value,
  className,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="border-l-4 border-primary pl-4">
      <div className="flex items-start gap-3 mb-2">
        <Icon
          className="size-5 text-primary mt-1 flex-shrink-0"
          strokeWidth={3}
        />
        <div>
          <Text variant="meta" as="p" className="text-xs mb-1">
            {label}
          </Text>
          <Text
            variant="body"
            as="p"
            className={`text-primary font-bold text-sm ${className ?? ""}`}
          >
            {value}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default function ConcertInfo({
  concert,
  isPast,
  formattedDate,
}: ConcertInfoProps) {
  return (
    <div className="bg-background border-4 border-primary p-8 sticky top-24">
      <Text
        variant="label"
        as="div"
        className="inline-block mb-8 px-3 py-1 bg-primary text-primary-foreground text-xs"
      >
        Event Info
      </Text>

      <div className="space-y-6">
        <InfoRow
          icon={Calendar}
          label="Datum"
          value={formattedDate}
          className="uppercase"
        />
        <InfoRow icon={Clock} label="Einlass" value={`${concert.time} Uhr`} />
        <InfoRow
          icon={MapPin}
          label="Venue"
          value={concert.venue}
          className="uppercase"
        />
        <InfoRow
          icon={Euro}
          label="Preis"
          value={concert.price}
          className="font-black text-xl"
        />
        {concert.duration && (
          <InfoRow icon={Timer} label="Dauer" value={concert.duration} />
        )}
        {concert.genre && (
          <InfoRow
            icon={Music2}
            label="Genre"
            value={concert.genre}
            className="uppercase"
          />
        )}
      </div>

      {!isPast && (
        <div className="mt-8 pt-8 border-t-2 border-primary/30">
          <a
            href="tel:040123456789"
            className="block w-full bg-primary hover:bg-primary/80 text-primary-foreground text-center px-6 py-4 font-black uppercase tracking-wider transition-all hover:scale-105 mb-3"
          >
            Tickets
          </a>
          <a
            href="mailto:info@jazzraum-hamburg.de"
            className="block w-full bg-background text-primary text-center px-6 py-4 font-black uppercase tracking-wider transition-all hover:scale-105 border-2 border-primary"
          >
            Email
          </a>
        </div>
      )}
    </div>
  );
}
