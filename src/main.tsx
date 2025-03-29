
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force a clean render to update the preview
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
