import React from 'react'
import Header from './components/Layouts/Header.jsx'
import HomePage from './Pages/HomePage.jsx'
import Footer from './components/Layouts/Footer.jsx'
import { GrAppsRounded } from 'react-icons/gr'
import { BrowserRouter } from 'react-router-dom'
import AppRutes from './routes/AppRutes.jsx'

const App = () => {
  return (
   <BrowserRouter>
   <AppRutes/>
   </BrowserRouter>
  )
}
export default App
