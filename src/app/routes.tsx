import { createHashRouter, Navigate } from "react-router";
import ProductsPage from "./pages/ProductsPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/products" replace />,
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