import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './core/redux/store'
import { BrowserRouter } from 'react-router'
import { base_path } from './environment'
import ALLRoutes from './feature-module/routes/router'
import ThemeRouteHandler from './core/common/theme-route-handler/themeRouteHandler'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/css/feather.css";
import "@tabler/icons-webfont/dist/tabler-icons.css";
import "./index.scss"; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={base_path}>
        <ThemeRouteHandler />
        <ALLRoutes />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
