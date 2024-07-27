import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Welcome } from './components/Welcome/Welcome'
import { Catalog } from './components/Catalog/Catalog'
import { Contact } from './components/Contact/Contact'
import { Error404 } from './components/Error404/Error404'
import { ScrollToTop } from './helpers/ScrollToTop/ScrollToTop'

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
