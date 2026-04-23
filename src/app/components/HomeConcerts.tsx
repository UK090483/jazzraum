"use client";

import { useState } from "react";
import type { Concert } from "@/lib/concerts";
import MonthGroup from "./MonthGroup";
import { Text } from "./Text";

interface HomeConcertsProps {
  monthEntries: [string, Concert[]][];
  initialVisibleCount: number;
}

export default function HomeConcerts({
  monthEntries,
  initialVisibleCount,
}: HomeConcertsProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const nextMonthName =
    visibleCount < monthEntries.length ? monthEntries[visibleCount][0] : null;

  return (
    <>
      <div className="space-y-16">
        {monthEntries.slice(0, visibleCount).map(([monthYear, concerts]) => (
          <MonthGroup
            key={monthYear}
            monthYear={monthYear}
            concerts={concerts}
          />
        ))}
      </div>
      {nextMonthName && (
        <div className="mt-12 flex justify-center gap-4">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((count) =>
                Math.min(count + 1, monthEntries.length),
              )
            }
            className="inline-block border-2 border-primary px-8 py-3 font-mono tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Text variant="label" as="span">
              Load {nextMonthName}
            </Text>
          </button>
          <button
            type="button"
            onClick={() => setVisibleCount(monthEntries.length)}
            className="inline-block border-2 border-primary/40 px-8 py-3 font-mono tracking-wider uppercase hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <Text variant="label" as="span">
              Show All
            </Text>
          </button>
        </div>
      )}
    </>
  );
}
