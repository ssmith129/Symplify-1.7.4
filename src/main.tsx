import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Minimal test render
const TestApp = () => {
  return (
    <div style={{ padding: '20px', background: '#f0f0f0', minHeight: '100vh' }}>
      <h1>Test Render Working</h1>
      <p>If you see this, basic React is working.</p>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <TestApp />
    </StrictMode>
  );
}
