import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
    <StrictMode>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </StrictMode>
)

