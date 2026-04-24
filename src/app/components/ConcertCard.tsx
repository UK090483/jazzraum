import { Calendar, Clock, MapPin, Euro } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Concert } from "@/lib/concerts";
import { Text } from "./Text";

interface ConcertCardProps {
  concert: Concert;
}

export default function ConcertCard({ concert }: ConcertCardProps) {
  const formattedDate = concert.date.toLocaleDateString("de-DE", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/konzert/${concert.id}`}
      className="group bg-background border-2 border-primary/30 hover:border-primary transition-all duration-200 relative overflow-hidden block"
    >
      {/* Diagonal stripe effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rotate-45 translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-all"></div>

      <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-primary/30 group-hover:border-primary transition-colors">
        <Image
          src={concert.image}
          alt={concert.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 brightness-75 group-hover:brightness-100"
        />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <Text
            variant="h4"
            className="mb-2 group-hover:text-primary/80 transition-colors"
          >
            {concert.title}
          </Text>
          <Text variant="nav" as="p" className="text-lg text-primary/80">
            {concert.artist}
          </Text>
        </div>

        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-primary" strokeWidth={2.5} />
            <Text variant="meta" as="span">
              {formattedDate}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-primary" strokeWidth={2.5} />
            <Text variant="meta" as="span">
              {concert.time}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" strokeWidth={2.5} />
            <Text variant="meta" as="span">
              {concert.venue}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <Euro className="size-4 text-primary" strokeWidth={2.5} />
            <Text variant="meta" as="span" className="font-bold">
              {concert.price}
            </Text>
          </div>
        </div>

        <Text variant="body" className="leading-relaxed mb-4">
          {concert.description}
        </Text>

        <Text
          variant="label"
          as="div"
          className="text-xs group-hover:tracking-widest transition-all"
        >
          Details →
        </Text>
      </div>
    </Link>
  );
}
