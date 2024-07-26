import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Welcome } from './components/Welcome/Welcome'
import { Catalog } from './components/Catalog/Catalog'
import { Contact } from './components/Contact/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
