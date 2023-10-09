import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"
import CardUser from "../ui/CardUser"
import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


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

    const handleSubmit = async (event) => {
      event.preventDefault()
      
      const newUser = {
        name: event.target.name.value,
        email: event.target.email.value,
        pass: event.target.pass.value,
        photo: event.target.photo.value
      }
      
      const response = await fetch('http://localhost:3300/user',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })

      if(response.ok){
        const data = await response.json()
        alert(data.success)
        setShowModal(false)
        setUsers([...users, data.user])
      }
    }  

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
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control type="text" name="name"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control type="password" name="pass" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>URL Foto</Form.Label>
                      <Form.Control type="text" name="photo"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Cadastrar</Button>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
              </Modal>

              {
                users.length > 0 ?
                  users.map((user) => {
                    return <CardUser key={user.id} user={user} users={users} setUsers={setUsers} />
                  })
                :
                  <p>Carregando...</p>
              }
            </Content>
        </div>
        <Footer />
    </>
  )
}

export default QuemSomos