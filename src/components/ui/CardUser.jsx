import './CardUser.css'
import { IoTrashOutline as IconTrash } from 'react-icons/io5'
import { FiEdit as IconEdit } from 'react-icons/fi'

const CardUser = ({user}) => {
  return (
    <div className="card-user">
        <img src={user.photo} alt={user.name} />
        <div>
            <h3>{user.name}</h3>
            <span>{user.email}</span>
            <IconEdit className='icon-edit'/>
            <IconTrash className='icon-trash' />
        </div>
    </div>
  )
}

export default CardUser