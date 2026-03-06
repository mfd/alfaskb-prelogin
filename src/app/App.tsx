import { RouterProvider } from 'react-router';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CartProvider } from './contexts/CartContext';
import { router } from './routes';

export default function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ErrorBoundary>
  );
}