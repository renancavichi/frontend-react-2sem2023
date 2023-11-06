import './CardUser.css'
import { IoTrashOutline as IconTrash } from 'react-icons/io5'
import { FiEdit as IconEdit } from 'react-icons/fi'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CardUser = ({user, users, setUsers}) => {

  const [showEditModal, setShowEditModal] = useState(false)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [photo, setPhoto] = useState(user.photo)

  const handleDelete = async (id) => {
    const response = await fetch('http://localhost:3300/user',{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({id: id})
    })

    if(response.ok){
      const data = await response.json()
      if(data?.success){
        alert(data.success)
        const newUsers = users.filter((user) => user.id != id)
        setUsers(newUsers)
      }
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newUser = {
      id: user.id,
      name: name,
      email: email,
      photo: photo
    } 
    const response = await fetch('http://localhost:3300/user',{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(newUser)
    })

    if(response.ok){
      const data = await response.json()
      alert(data.success)
      setShowEditModal(false)
      const newUsers = users.map((userC)=>{
        if(userC.id == user.id){
          return data.user
        } else{
          return userC
        }
      })
      setUsers(newUsers)
    }

  }

  return (
    <>
      <div className="card-user">
          <img src={user.photo} alt={user.name} />
          <div>
              <h3>{user.name}</h3>
              <span>{user.email}</span>
              <IconEdit className='icon-edit' onClick={() => setShowEditModal(true)} />
              <IconTrash className='icon-trash' onClick={() => handleDelete(user.id)} />
          </div>
      </div>
      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Editar Usuário
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email"  value={email} onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL Foto</Form.Label>
              <Form.Control type="text" name="photo"  value={photo} onChange={(event) => setPhoto(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Editar</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowEditModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CardUser