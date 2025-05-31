import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Badge from "./pages/Badge";
import Feedback from "./pages/Feedback";
import Team from "./pages/Team";
import User from "./pages/User";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/user", element: <User /> },
  { path: "/feedback", element: <Feedback /> },
  { path: "/badge", element: <Badge /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/team", element: <Team /> },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
