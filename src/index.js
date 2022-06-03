import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Preloader from './components/Preloader';
import 'antd/dist/antd.css';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <React.Suspense fallback={<Preloader />}>
            <ErrorBoundary>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ErrorBoundary>
        </React.Suspense>
    </React.StrictMode>
);
