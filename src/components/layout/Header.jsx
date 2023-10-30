import './Header.css'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button' 
import useUserStore from '../../store/userStore.js'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

const Header = () => {

  const nameUser = useUserStore((state) => state.name)
  const photoUser = useUserStore((state) => state.photo)
  const isLogged = useUserStore((state) => state.isLogged)
  const loginUser = useUserStore((state) => state.login)
  const logoutUser = useUserStore((state) => state.logout)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const loginData = {
      email: event.target.email.value,
      pass: event.target.pass.value,
    }
    
    const response = await fetch('http://localhost:3300/auth/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(loginData)
    })
    const data = await response.json()
    if(response.ok){
      if(data?.success){
        alert(data.success)
        loginUser(data.user)
        setShowModal(false)
      }
      if(data?.error){
        alert(data.error)
      }
    }else{
      if(data?.error){
        alert(data.error)
      }else{
        alert('Erro ao tentar logar!')
      }
    }
  }

  const handleLogout = async () => {
    const response = await fetch('http://localhost:3300/auth/logout',{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    const data = await response.json()
    if(response.ok){
      if(data?.success){
        alert(data.success)
        logoutUser()
      }
      if(data?.error){
        alert(data.error)
      }
    }else{
      if(data?.error){
        alert(data.error)
      }else{
        alert('Erro ao tentar deslogar!')
      }
    }
  }

  return (
    <header>
        <h1>Coffee & Mountain</h1>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to="/quem-somos">Quem Somos</NavLink></li>
                <li><NavLink to="/contato">Contato</NavLink></li>
                {
                  isLogged ? 
                  <>
                    <li><img src={photoUser} alt={nameUser} style={{width: '40px', borderRadius: "50%"}} /></li>
                    <li>{nameUser}</li>
                    <li><Button variant="primary" onClick={() => handleLogout()}>Logout</Button></li>
                  </>
                    
                  :
                    <><li><Button variant="primary" onClick={() => setShowModal(true)}>Login</Button></li>
                    <li><Button variant="secondary">Cadastre-se</Button></li></>
                }
                
            </ul>
        </nav>
        <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Entrar
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control type="password" name="pass" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Logar</Button>
                  </Form>
                </Modal.Body>
              </Modal>
    </header>
  )
}

export default Header