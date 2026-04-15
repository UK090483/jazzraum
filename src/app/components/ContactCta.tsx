import { Text } from "./Text";

export default function ContactCta() {
  return (
    <div className="mt-16 bg-background border-4 border-primary p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative text-center">
        <Text variant="h3" className="mb-4">
          Tickets /// Reservierung
        </Text>
        <Text
          variant="body"
          className="mb-8 max-w-2xl mx-auto uppercase tracking-wide"
        >
          First come, first serve // Limited Capacity
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:040123456789"
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-10 py-4 font-black uppercase tracking-wider transition-all hover:scale-105 border-2 border-primary-foreground"
          >
            040 / 123 456 78
          </a>
          <a
            href="mailto:info@jazzraum-hamburg.de"
            className="bg-background text-primary px-10 py-4 font-black uppercase tracking-wider transition-all hover:scale-105 border-2 border-primary"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
