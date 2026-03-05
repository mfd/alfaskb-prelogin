import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorCount: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorCount: 0 };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Для ошибок CartProvider пытаемся восстановиться только один раз
    if (error.message?.includes('useCart must be used within CartProvider')) {
      console.warn('CartProvider error detected during HMR');
      
      if (this.state.errorCount < 3) {
        // Увеличиваем счетчик и пытаемся восстановиться
        this.setState(prev => ({ 
          hasError: false, 
          error: null, 
          errorCount: prev.errorCount + 1 
        }));
      }
    }
  }

  render() {
    if (this.state.hasError && this.state.errorCount >= 3) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Что-то пошло не так</h1>
            <p className="text-gray-600 mb-4">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#ef3124] text-white px-6 py-3 rounded hover:bg-[#d42e20] transition-colors"
            >
              Перезагрузить страницу
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}