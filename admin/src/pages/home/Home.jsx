import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useMemo } from "react";
import { apiUrl } from "../../context/Constants/constants";

export default function Home() {
  const MONTHS = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ], []
  )

  const [userStats, setUserStats] = useState([])

  useEffect(() => {
    const getStats = async () => {
      try {
        
        const res = await axios.get(`${apiUrl}/users/stats`, {
          headers:{
            "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
          }
        })
        const statslist = res.data.sort(function (a, b) {
          return a._id - b._id;
        })
        statslist.map(item=> setUserStats(prev=>[...prev, {name:MONTHS[item._id-1], "New User": item.total},]))
      } catch (error) {
        console.log(error)
      }
    }
    getStats()
  },[MONTHS])

  return (
    <div className="home">
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
