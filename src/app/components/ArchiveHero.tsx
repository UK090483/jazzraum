import { Text } from "./Text";

export default function ArchiveHero() {
  return (
    <div className="mb-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Text variant="display" className="text-[16rem] rotate-12">
          PAST
        </Text>
      </div>

      <div className="relative text-center">
        <Text
          variant="label"
          as="div"
          className="inline-block mb-6 px-6 py-2 bg-background border-2 border-primary -rotate-1"
        >
          ⟲ Archiv ⟲
        </Text>
        <Text variant="h2" className="mb-6">
          <span className="text-primary">Past</span>
          <br />
          <span className="text-primary">Shows</span>
        </Text>
        <Text variant="subtitle" className="max-w-2xl mx-auto">
          Die Sessions, die Geschichte geschrieben haben
        </Text>
      </div>
    </div>
  );
}
