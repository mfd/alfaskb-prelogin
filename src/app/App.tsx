import { RouterProvider } from 'react-router';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import { router } from './routes';

export default function App() {
  return (
    <ErrorBoundary>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UserProvider>
    </ErrorBoundary>
  );
}