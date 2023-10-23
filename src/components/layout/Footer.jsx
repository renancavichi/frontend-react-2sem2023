import "./Footer.css"
import useUserStore from '../../store/userStore.js'
 
const Footer = () => {

  const nameUser = useUserStore((state) => state.name)

  return (
    <footer>
        <span>Renan Cavichi @ 2023 - Logado como: {nameUser}</span>
    </footer>
  )
}

export default Footer