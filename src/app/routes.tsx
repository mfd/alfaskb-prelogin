import { createHashRouter, Navigate } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/products" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "*",
    element: <Navigate to="/products" replace />,
  },
]);