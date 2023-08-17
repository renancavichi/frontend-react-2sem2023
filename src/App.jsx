import Header from "./Header"
import Sidebar from "./Sidebar"
import Content from "./Content"
import Footer from "./Footer"

import "./App.css"

const App = () => {
  return (
    <>
       <Header />
       <div id="main">
          <Sidebar />
          <Content />
       </div>
       <Footer />
    </>
  )
}

export default App
