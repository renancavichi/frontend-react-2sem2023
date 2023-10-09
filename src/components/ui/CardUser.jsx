import './CardUser.css'
import { IoTrashOutline as IconTrash } from 'react-icons/io5'
import { FiEdit as IconEdit } from 'react-icons/fi'

const CardUser = ({user, users, setUsers}) => {

  const handleDelete = async (id) => {
    const response = await fetch('http://localhost:3300/user',{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
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

  return (
    <div className="card-user">
        <img src={user.photo} alt={user.name} />
        <div>
            <h3>{user.name}</h3>
            <span>{user.email}</span>
            <IconEdit className='icon-edit'/>
            <IconTrash className='icon-trash' onClick={() => handleDelete(user.id)} />
        </div>
    </div>
  )
}

export default CardUser