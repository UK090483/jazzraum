import type { AboutPage } from "@/lib/about";
import ReactMarkdown from "react-markdown";
import { Text } from "./Text";

interface AboutPageProps {
  page: AboutPage;
}

export default function AboutPageContent({ page }: AboutPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Text variant="display" className="text-[16rem] rotate-12">
            JAZZ
          </Text>
        </div>
        <div className="relative text-center">
          <Text
            variant="label"
            as="div"
            className="inline-block mb-6 px-6 py-2 bg-background border-2 border-primary -rotate-1"
          >
            /// Who We Are
          </Text>
          <Text variant="h2" className="mb-6">
            <span className="text-primary">{page.title}</span>
          </Text>
          {page.subtitle && (
            <Text variant="subtitle" className="max-w-2xl mx-auto">
              {page.subtitle}
            </Text>
          )}
        </div>
      </div>

      {/* Mission callout */}
      {page.mission && (
        <div className="mb-16 border-l-4 border-primary pl-8 py-2 max-w-3xl mx-auto">
          <Text
            variant="subtitle"
            as="p"
            className="text-primary/80 leading-relaxed"
          >
            {page.mission}
          </Text>
        </div>
      )}

      {/* Body */}
      {page.body && (
        <div className="max-w-3xl mx-auto prose-concert font-mono text-sm text-primary/70 leading-relaxed space-y-4">
          <ReactMarkdown>{page.body}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
