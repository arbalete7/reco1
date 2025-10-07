import './App.css'
import Sidebar from './components/Sidebar.tsx'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      <aside style={{ borderRight: '1px solid #eee', minWidth: 200 }}>
        <Sidebar />
      </aside>

      <main style={{ flex: 1, padding: 16, minWidth: 0 }}>
        <Outlet />
      </main>
    </div>
  )
}

export default App
