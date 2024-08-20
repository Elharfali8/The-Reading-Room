import { BrowserRouter, Routes } from "react-router-dom"
import { Footer, Navbar, Sidebar } from "./components"
import { useState } from "react"


function App() {
  const [navIsOpen, setNavIsOpen] = useState(true)

  const handleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  return (
    <BrowserRouter>
      <Navbar navIsOpen={navIsOpen} handleNav={handleNav} />
      <Sidebar navIsOpen={navIsOpen} handleNav={handleNav} />
      <Routes>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
