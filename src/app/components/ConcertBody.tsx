import type { Concert } from "@/lib/concerts";
import ReactMarkdown from "react-markdown";
import { Text } from "./Text";

interface ConcertBodyProps {
  concert: Concert;
}

export default function ConcertBody({ concert }: ConcertBodyProps) {
  return (
    <div className="space-y-12">
      {/* Description */}
      <div>
        <Text
          variant="label"
          as="div"
          className="inline-block mb-6 px-4 py-2 bg-background border-2 border-primary skew-x-[-2deg]"
        >
          /// About This Show
        </Text>
        <Text
          variant="body"
          as="p"
          className="text-lg text-primary/80 leading-relaxed mb-6"
        >
          {concert.description}
        </Text>
        {concert.longDescription && (
          <div className="prose-concert text-sm text-primary/70 font-mono leading-relaxed space-y-3">
            <ReactMarkdown>{concert.longDescription}</ReactMarkdown>
          </div>
        )}
      </div>

      {/* Lineup */}
      {concert.lineup && concert.lineup.length > 0 && (
        <div>
          <Text
            variant="label"
            as="div"
            className="inline-block mb-6 px-4 py-2 bg-background border-2 border-primary skew-x-[-2deg]"
          >
            /// Lineup
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {concert.lineup.map((member, index) => (
              <div
                key={index}
                className="bg-background border-l-4 border-primary p-4"
              >
                <Text
                  variant="meta"
                  as="p"
                  className="text-primary/80 tracking-wide"
                >
                  {member}
                </Text>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
