import { getCurrentConcerts } from "@/lib/concerts";
import ConcertCard from "./ConcertCard";
import HomeHero from "./HomeHero";
import ContactCta from "./ContactCta";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <HomeHero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {getCurrentConcerts().map((concert) => (
          <ConcertCard key={concert.id} concert={concert} />
        ))}
      </div>
      <ContactCta />
    </div>
  );
}
