import './Header.css'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button' 
import useUserStore from '../../store/userStore.js'

const Header = () => {

  const nameUser = useUserStore((state) => state.name)
  const isLogged = useUserStore((state) => state.isLogged)
  const loginUser = useUserStore((state) => state.login)
  const logoutUser = useUserStore((state) => state.logout)

  return (
    <header>
        <h1>Coffee & Mountain - {nameUser}</h1>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to="/quem-somos">Quem Somos</NavLink></li>
                <li><NavLink to="/contato">Contato</NavLink></li>
                {
                  isLogged ? 
                    <li><Button variant="primary" onClick={() => logoutUser()}>Logout</Button></li>
                  :
                    <li><Button variant="primary" onClick={() => loginUser({
                      name: "Renan",
                      email: "renan@gmail.com",
                      photo: "..."
                    })}>Login</Button></li>
                }
                <li><Button variant="secondary">Cadastre-se</Button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header