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

console.log('Main.tsx loaded, attempting to render...');

try {
  const rootElement = document.getElementById('root');
  console.log('Root element found:', !!rootElement);

  createRoot(rootElement!).render(
    <StrictMode>
      <Provider store={store}>
      <BrowserRouter basename={base_path}>
        <ThemeRouteHandler />
        <ALLRoutes />
      </BrowserRouter>
      </Provider>
    </StrictMode>
  );
  console.log('Render completed successfully');
} catch (error) {
  console.error('Failed to render app:', error);
  document.getElementById('root')!.innerHTML = `<div style="color: red; padding: 20px;"><h1>Error Loading App</h1><pre>${error}</pre></div>`;
}
