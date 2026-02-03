import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Super simple test to verify React works
const SimpleTest = () => {
  return (
    <div style={{ 
      padding: '50px', 
      background: '#2E37A4', 
      color: 'white',
      fontSize: '24px',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1>React is working!</h1>
      <p>If you see this, the basic React setup is correct.</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <SimpleTest />
    </StrictMode>
  );
  console.log('React rendered successfully');
} else {
  console.error('Root element not found');
}
