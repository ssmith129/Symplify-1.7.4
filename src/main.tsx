import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './core/redux/store'
import { BrowserRouter, Routes, Route } from 'react-router'
import { base_path } from './environment'

// Import Dashboard directly to test
import Dashboard from './feature-module/components/pages/dashboard/dashboard'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter basename={base_path}>
          <Routes>
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}
