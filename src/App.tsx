import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'
import { ScrollToTop } from './helpers/ScrollToTop/ScrollToTop'
import { Welcome } from './pages/Welcome/Welcome'
import { Catalog } from './pages/Catalog/Catalog'
import { Contact } from './pages/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Error404 } from './pages/Error404/Error404'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
