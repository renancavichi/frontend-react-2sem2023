import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"
import CardUser from "../ui/CardUser"
import { useEffect, useState } from "react"


const QuemSomos = () => {

    const [users, setUsers] = useState([])
     

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