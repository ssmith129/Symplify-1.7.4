import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './core/redux/store'
import { BrowserRouter } from 'react-router'
import { base_path } from './environment'
import ALLRoutes from './feature-module/routes/router'
import ThemeRouteHandler from './core/common/theme-route-handler/themeRouteHandler'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/style/css/iconsax.css";
import "../src/style/css/feather.css";
import "../node_modules/@tabler/icons-webfont/dist/tabler-icons.css";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../src/index.scss"; 

// Simple test render to debug
const TestApp = () => {
  return (
    <div style={{ padding: '20px', background: '#f0f0f0' }}>
      <h1>Test Render Working</h1>
      <p>If you see this, basic React is working.</p>
    </div>
  );
};

const FullApp = () => (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={base_path}>
        <ThemeRouteHandler />
        <ALLRoutes />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// Try to render and catch any error
const rootElement = document.getElementById('root');
if (rootElement) {
  try {
    createRoot(rootElement).render(<FullApp />);
  } catch (error) {
    console.error('Full app failed to render:', error);
    // Fallback to test app
    createRoot(rootElement).render(
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>Error Loading Application</h1>
        <pre>{String(error)}</pre>
      </div>
    );
  }
}
