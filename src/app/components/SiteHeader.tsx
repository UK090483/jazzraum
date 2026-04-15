import { Link, useLocation } from "react-router";
import { Text } from "./Text";

export default function SiteHeader() {
  const location = useLocation();

  return (
    <header className="border-b-2 border-primary bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-3 group">
            <Text variant="h1">JAzZRaUM</Text>
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/" className="transition-all">
              <Text
                variant="nav"
                as="span"
                className={
                  location.pathname === "/"
                    ? "text-primary border-b-2 border-primary"
                    : "text-primary/60 hover:text-primary border-b-2 border-transparent hover:border-primary"
                }
              >
                Live
              </Text>
            </Link>
            <Link to="/archiv" className="transition-all">
              <Text
                variant="nav"
                as="span"
                className={
                  location.pathname === "/archiv"
                    ? "text-primary border-b-2 border-primary"
                    : "text-primary/60 hover:text-primary border-b-2 border-transparent hover:border-primary"
                }
              >
                Archiv
              </Text>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
