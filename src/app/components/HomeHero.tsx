import { Text } from "./Text";

export default function HomeHero() {
  return (
    <div className="mb-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Text variant="display" className="text-[20rem]">
          LIVE
        </Text>
      </div>

      <div className="relative text-center">
        <Text
          variant="label"
          as="div"
          className="inline-block mb-6 px-6 py-2 bg-primary text-primary-foreground rotate-1"
        >
          ⚡ April 2026 ⚡
        </Text>
        <Text variant="h2" className="mb-6">
          <span className="text-primary">Live</span>
          <br />
          <span className="text-primary">Sessions</span>
        </Text>
        <Text variant="subtitle" className="max-w-2xl mx-auto">
          LiEBe JAZzeRAuM FREUnDE, HERZLICH WILLKOMMEN
        </Text>
      </div>
    </div>
  );
}
