import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './core/redux/store'
import { BrowserRouter, Routes, Route } from 'react-router'
import { base_path } from './environment'

// Simple inline component
const SimpleDashboard = () => (
  <div style={{ padding: '20px', background: '#f0f0f0', minHeight: '100vh' }}>
    <h1>Simple Dashboard Test</h1>
    <p>Redux store state keys: {Object.keys(store.getState()).join(', ')}</p>
    <p>Base path: "{base_path}"</p>
    <p>Location: {window.location.pathname}</p>
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter basename={base_path}>
          <Routes>
            <Route path="*" element={<SimpleDashboard />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}
