import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from '@/redux/store.ts';
import '@/utils/i18n.ts';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/utils/i18n.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>    
      <I18nextProvider i18n={i18n}> 
        <App />
      </I18nextProvider>      
    </Provider>
  </StrictMode>
);
