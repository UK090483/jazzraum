import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const textVariants = cva("", {
  variants: {
    variant: {
      // Giant decorative background text
      display: "text-primary [font-family:var(--font-family)]",
      // Site logo / top-level title
      h1: "text-3xl text-primary tracking-wide [font-family:var(--font-family)]",
      // Hero section heading (two-tone: use color prop)
      h2: "text-6xl md:text-8xl tracking-wide [font-family:var(--font-family)]",
      // Section / CTA heading
      h3: "text-4xl tracking-wide text-primary [font-family:var(--font-family)]",
      // Card title / sub-section heading
      h4: "text-2xl tracking-wide text-primary [font-family:var(--font-family)]",
      // Footer column heading / small section title
      h5: "text-lg font-bold text-primary [font-family:var(--font-family)]",
      // Descriptive lead text below headings
      subtitle: "text-lg text-primary/70 font-mono tracking-wide",
      // Standard body / address / detail text
      body: "text-sm text-primary/70 font-mono",
      // Inline meta info (dates, times, locations)
      meta: "text-sm text-primary/60 font-mono",
      // Copyright / legal footer line
      legal: "text-xs text-primary/40 font-mono tracking-wider",
      // Navigation links
      nav: "text-sm font-mono font-bold",
      // Badge / label text inside tags
      label: "font-mono tracking-wider",
    },
    shadow: {
      true: "",
      sm: "",
      false: "",
    },
  },
  defaultVariants: {
    shadow: false,
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TextTag = "p" | "span" | "div" | "label" | "figcaption" | "small";
type AllowedTag = HeadingTag | TextTag;

// Default HTML tag for each variant
const defaultTag: Record<
  NonNullable<VariantProps<typeof textVariants>["variant"]>,
  AllowedTag
> = {
  display: "div",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  subtitle: "p",
  body: "p",
  meta: "span",
  legal: "small",
  nav: "span",
  label: "span",
};

type TextProps = VariantProps<typeof textVariants> & {
  as?: AllowedTag;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export function Text({
  variant,
  shadow,
  as,
  className,
  children,
  style,
}: TextProps) {
  const tag = as ?? (variant ? defaultTag[variant] : "p");
  const Tag = tag as AllowedTag;

  return (
    <Tag
      className={cn(textVariants({ variant, shadow }), className)}
      style={style}
    >
      {children}
    </Tag>
  );
}
