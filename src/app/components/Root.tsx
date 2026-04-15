import { Outlet } from "react-router";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Root() {
  return (
    <div className="min-h-screen text-primary">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
