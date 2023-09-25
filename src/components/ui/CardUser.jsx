import './CardUser.css'

const CardUser = ({user}) => {
  return (
    <div className="card-user">
        <img src={user.photo} alt={user.name} />
        <div>
            <h3>{user.name}</h3>
            <span>{user.email}</span>
        </div>
    </div>
  )
}

export default CardUser