import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './core/redux/store'
import { BrowserRouter, Routes, Route } from 'react-router'
import { base_path } from './environment'

// Test component to verify Redux and Router work
const TestDashboard = () => {
  return (
    <div style={{ 
      padding: '50px', 
      background: '#f5f6f8', 
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#2E37A4' }}>Redux + Router Working!</h1>
      <p>Base path: {base_path}</p>
      <p>Current URL: {window.location.pathname}</p>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter basename={base_path}>
          <Routes>
            <Route path="*" element={<TestDashboard />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}
