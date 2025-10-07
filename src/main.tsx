import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AppsDiscovery from './pages/AppsDiscovery.tsx'
import AppsInventory from './pages/AppsInventory.tsx'
import Settings from './pages/Settings.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/discovery" replace /> },
      { path: 'discovery', element: <AppsDiscovery /> },
      { path: 'inventory', element: <AppsInventory /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
