import { Text } from "./Text";

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-primary mt-20 py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Text variant="h5" className="mb-4">
              Jazzraum HH
            </Text>
            <Text variant="body">Underground Jazz // Hamburg</Text>
          </div>
          <div>
            <Text variant="h5" className="mb-4">
              Kontakt
            </Text>
            <Text variant="body">
              Beispielstraße 123
              <br />
              20095 Hamburg
              <br />
              Tel: 040 / 123 456 78
            </Text>
          </div>
          <div>
            <Text variant="h5" className="mb-4">
              Zeiten
            </Text>
            <Text variant="body">
              Di - Sa: 19:00 - 01:00
              <br />
              So: 18:00 - 23:00
              <br />
              Mo: Geschlossen
            </Text>
          </div>
        </div>
        <Text
          variant="legal"
          as="div"
          className="mt-12 pt-8 border-t border-primary/30 text-center"
        >
          © 2026 Jazzraum Hamburg
        </Text>
      </div>
    </footer>
  );
}
