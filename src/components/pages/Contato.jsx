import Footer from "../layout/Footer"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"

const Contato = () => {
  return (
    <>
        <Header />
        <div id="main">
            <Sidebar />
            <Content>
                <h1>Contato</h1>
                <p>Entre em contato conosco através do formulário abaixo:</p>
            </Content>
        </div>
        <Footer />
    </>
  )
}

export default Contato