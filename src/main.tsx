import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './core/redux/store'
import { BrowserRouter } from 'react-router'
import { base_path } from './environment'
import ALLRoutes from './feature-module/routes/router'
import ThemeRouteHandler from './core/common/theme-route-handler/themeRouteHandler'

// Import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/css/iconsax.css";
import "./style/css/feather.css";
import "@tabler/icons-webfont/dist/tabler-icons.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss"; 

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter basename={base_path}>
          <ThemeRouteHandler />
          <ALLRoutes />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}
