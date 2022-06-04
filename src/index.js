import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './redux/store';
import { persist } from './redux/slicers/auth';
import { authSetData, getData } from './redux/persistor';

import App from './App';
import Preloader from './components/Preloader';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import 'antd/dist/antd.css';
import './styles/main.scss';

store.dispatch(persist(getData()));
store.subscribe(() => {
    authSetData(store.getState()?.auth);
});

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 2
        }
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <React.Suspense fallback={<Preloader />}>
                    <ErrorBoundary>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </ErrorBoundary>
                </React.Suspense>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
