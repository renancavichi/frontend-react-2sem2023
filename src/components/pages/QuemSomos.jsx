import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"
import CardUser from "../ui/CardUser"

const users = [
{
  nome: "Renan Cavichi",
  email: "renancavichi@gmail.com",
  photo: "https://avatars.githubusercontent.com/u/4259630?v=4"
},
{
  nome: "Maria",
  email: "maria@gmail.com",
  photo: "https://avatars.githubusercontent.com/u/141092604?v=4"
}
] 
const QuemSomos = () => {
  return (
    <>
        <Header />
        <div id="main">
            <Sidebar />
            <Content>
              <h1>Quem Somos</h1>
              {
                users.map((user) => {
                  return <CardUser user={user} />
                })
              }
            </Content>
        </div>
        <Footer />
    </>
  )
}

export default QuemSomos