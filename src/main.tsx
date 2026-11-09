import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from '@/AppRouter'
import { SectionVersionProvider } from '@/context/SectionVersionProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SectionVersionProvider>
      <AppRouter />
    </SectionVersionProvider>
  </StrictMode>,
)
