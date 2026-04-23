"use client";

import { useEffect } from "react";

function jazzify(text: string): string {
  return text
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, i) =>
          i === 0
            ? char.toUpperCase()
            : Math.random() > 0.5
              ? char.toUpperCase()
              : char.toLowerCase(),
        )
        .join(""),
    )
    .join(" ");
}

export default function JazzMode() {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "e" && e.metaKey) {
        e.preventDefault();
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode(node) {
              const parent = node.parentElement;
              if (!parent) return NodeFilter.FILTER_REJECT;
              const tag = parent.tagName;
              if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(tag))
                return NodeFilter.FILTER_REJECT;
              return NodeFilter.FILTER_ACCEPT;
            },
          },
        );
        const nodes: Text[] = [];
        while (walker.nextNode()) nodes.push(walker.currentNode as Text);
        nodes.forEach((node) => {
          node.textContent = jazzify(node.textContent ?? "");
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
