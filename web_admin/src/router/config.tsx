
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import AdminLogin from "../pages/admin/login/page";
import AdminDashboard from "../pages/admin/dashboard/page";
import AdminBookings from "../pages/admin/bookings/page";
import AdminAnnouncements from "../pages/admin/announcements/page";
import AdminArtworks from "../pages/admin/artworks/page";
import AdminUsers from "../pages/admin/users/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/bookings",
    element: <AdminBookings />,
  },
  {
    path: "/admin/announcements",
    element: <AdminAnnouncements />,
  },
  {
    path: "/admin/artworks",
    element: <AdminArtworks />,
  },
  {
    path: "/admin/users",
    element: <AdminUsers />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
