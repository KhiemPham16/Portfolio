import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DisableDevtool from 'disable-devtool';

import GlobalStyles from './components/GlobalStyles';
import App from './App.jsx';

DisableDevtool({
    disableMenu: true,
    disableSelect: true,
    clearIntervalWhenDevOpenTrigger: true,
    ondevtoolopen(type, next) {
        alert('DevTools detected');
        next();
    }
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </StrictMode>
);
