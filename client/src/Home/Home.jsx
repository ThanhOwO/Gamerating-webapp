import Navbar from "../components/navbar/Navbar"
import "./home.scss"
import BG from "../assets/landing.jpg"


const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <img src={BG} alt="" width="100%" background-color="rgba(0, 0, 0, 0.5)"/>
    </div>
  )
}

export default Home
