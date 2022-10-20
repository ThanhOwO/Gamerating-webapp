import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import { useEffect, useState } from "react"
import axios from "axios"


const Home = ({type}) => {
  const [lists, setlists] = useState([]);
  const [genre, setgenre] = useState([null]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists?${type ? "?type=" + type : ""}${genre ? "$genre=" + genre : "" }`, {
          headers:{
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGI5Y2Y1NmRhMmNjMTUzOGU0NDIyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTkzMDM1MCwiZXhwIjoxNjY2MzYyMzUwfQ.R2QKUlPhrJdGHefyaHU_87yZt9YscFbkAHxa9EJ9ruY' 
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
        <Featured type={type}/>
        {lists.map((list) => (
          <List list={list}/>
        ))}
    </div>
  )
}

export default Home
