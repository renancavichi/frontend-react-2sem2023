import Spinner from 'react-bootstrap/Spinner'
import useUserStore from '../../store/userStore.js'
import { useEffect, useState } from 'react'


const Initializer = () => {

    const isLogged = useUserStore((state) => state.isLogged)
    const loginUser = useUserStore((state) => state.login)
    const [isLoading, setIsLoading] = useState(true)

    const checkLogin = async (event) => {
        const response = await fetch('http://localhost:3300/auth/login-token',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })
        const data = await response.json()
        if(response.ok){
          if(data?.success){
            loginUser(data.user)
          }
          if(data?.error){
            console.log(data.error)
          }
        }else{
          if(data?.error){
            console.log(data.error)
          }else{
            console.log(data.error)
          }
        }
        setIsLoading(false)
      }
    
      useEffect(() => {
        checkLogin()
    }, [])



  return (
    isLoading ?
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#fff',
    }}>
        <h3>Carregando...</h3>
        <Spinner animation="border" role="status" />
    </div> : null
  )
}

export default Initializer