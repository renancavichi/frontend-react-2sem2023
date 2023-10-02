import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"
import CardUser from "../ui/CardUser"
import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'


const QuemSomos = () => {

    const [users, setUsers] = useState([])
    const [showModal, setShowModal] = useState(false)
     

    useEffect(()=>{
      
      const getUsers = async () => {
        const response = await fetch('http://localhost:3300/user/list')
        const data = await response.json()
        console.log(data.success)
        console.log(data.users)
        setUsers(data.users)
      }

      getUsers()
      
    }, [])

  return (
    <>
        <Header />
        <div id="main">
            <Sidebar />
            <Content>
              <h1>Quem Somos</h1>
              <Button as="button" variant="primary" onClick={() => setShowModal(true)}>Cadastrar Usuário</Button>

              <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Cadastrar Usuário
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    form...
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
              </Modal>

              {
                users.length > 0 ? users.map((user) => {
                  return <CardUser key={user.id} user={user} />
                }): <p>Carregando...</p>
              }
            </Content>
        </div>
        <Footer />
    </>
  )
}

export default QuemSomos