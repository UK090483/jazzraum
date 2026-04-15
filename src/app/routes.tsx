import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import Archive from "./components/Archive";
import ConcertDetail from "./components/ConcertDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "archiv", Component: Archive },
      { path: "konzert/:concertId", Component: ConcertDetail },
    ],
  },
]);