import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "./theme/ThemeProvider";
import { LanguageProvider } from "./language/LanguageProvider";
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
)
