import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { UserCard } from './Usercard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <UserCard/>
  </StrictMode>,
)
