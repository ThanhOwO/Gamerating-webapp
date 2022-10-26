import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import { useEffect, useState } from "react"
import axios from "axios"
import Cards from "../DailyNew/Card/Cards"


const Home = ({type}) => {
  const [lists, setlists] = useState([]);
  const [genre, setgenre] = useState([null]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists?${type ? "?type=" + type : ""}${genre ? "$genre=" + genre : "" }`, {
          headers:{
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
          }
        })
        setlists(res.data)

      } catch (error) {
        console.log(error)
      }
    };
    getRandomLists()
  },[type, genre])
  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type} setgenre={setgenre}/>
        {lists.map((list) => (
          <List list={list}/>
        ))}
    </div>
  )
}

export default Home
