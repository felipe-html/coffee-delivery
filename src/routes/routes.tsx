import { ShoppingCart } from "../pages/ShoppingCart";
import { Home } from "../pages/Home";
import { Resume } from "../pages/Resume";

export const allRoutes = [
  { path: "/home", element: <Home /> },
  { path: "/shoping-cart", element: <ShoppingCart /> },
  { path: "/resume", element: <Resume /> },
];
