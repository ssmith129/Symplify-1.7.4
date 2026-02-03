import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/themeSlice';


const ThemeRouteHandler = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const isDarkLayout = location.pathname.includes('layout-dark');
    const htmlElement = document.documentElement;
    
    if (isDarkLayout) {
      // Set dark theme
      htmlElement.setAttribute('data-bs-theme', 'dark');
      dispatch(updateTheme({ 'data-bs-theme': 'dark' }));
    } else {
      // Set light theme
      htmlElement.setAttribute('data-bs-theme', 'light');
      dispatch(updateTheme({ 'data-bs-theme': 'light' }));
    }
  }, [location.pathname, dispatch]);

  return null; // This component doesn't render anything
};

export default ThemeRouteHandler;
