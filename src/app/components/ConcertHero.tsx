import type { Concert } from "@/lib/concerts";
import { Text } from "./Text";

interface ConcertHeroProps {
  concert: Concert;
  isPast: boolean;
}

export default function ConcertHero({ concert, isPast }: ConcertHeroProps) {
  return (
    <div className="relative h-[60vh] overflow-hidden border-y-4 border-primary">
      <img
        src={concert.image}
        alt={concert.title}
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Status Badge */}
      <div className="absolute top-8 right-8">
        <div
          className={`px-6 py-3 font-black uppercase text-sm rotate-3 ${
            isPast
              ? "bg-background text-primary/80"
              : "bg-primary text-primary-foreground animate-pulse"
          }`}
        >
          {isPast ? "⟲ Past Show" : "⚡ Live Soon"}
        </div>
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <Text
            variant="label"
            as="div"
            className="inline-block mb-4 px-4 py-2 bg-primary text-primary-foreground text-xs -rotate-1"
          >
            {concert.genre || "Jazz"}
          </Text>
          <Text variant="h2" as="h1" className="mb-4">
            {concert.title}
          </Text>
          <Text
            variant="h3"
            as="p"
            className="text-3xl md:text-4xl text-primary mb-2"
          >
            {concert.artist}
          </Text>
        </div>
      </div>
    </div>
  );
}
