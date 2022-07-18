import { LayoutPrivate } from "./pages/layouts/LayoutPrivate/LayoutPrivate";
import { LayoutPublic } from "./pages/layouts/LayoutPublic/LayoutPublic";

import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Home } from "./pages/public/Home";
import { Dashboard } from "./pages/private/Dashboard/Dashboard";

const PUBLIC_BASE_URL = "/";
const PRIVATE_BASE_URL = "/admin/";

export const routes = [
  {
    path: PUBLIC_BASE_URL,
    element: <LayoutPublic />,
    children: [{ path: PUBLIC_BASE_URL, element: <Home /> }],
  },
  {
    path: PRIVATE_BASE_URL,
    element: <LayoutPrivate />,
    children: [
      { path: `${PRIVATE_BASE_URL}`, element: <Dashboard /> },
      { path: `${PRIVATE_BASE_URL}login`, element: <Login /> },
      { path: `${PRIVATE_BASE_URL}register`, element: <Register /> },
    ],
  },
];
