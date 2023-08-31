import Home from "./components/pages/Home"
import QuemSomos from "./components/pages/QuemSomos"
import Page404 from "./components/pages/Page404"
import Contato from "./components/pages/Contato"
import {Routes, Route} from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
