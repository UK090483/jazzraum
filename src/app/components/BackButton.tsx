"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-bold uppercase text-sm group"
    >
      <ArrowLeft
        className="size-5 group-hover:-translate-x-1 transition-transform"
        strokeWidth={3}
      />
      Back
    </button>
  );
}
