import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
import { useLocation, Link } from "react-router-dom"

export default function Watch() {

const location = useLocation()
const {state} = location
 
  return (
    <div className="watch">
    <Link to="/">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
    </Link>
        <iframe className="video" src={state.gm}></iframe>
    </div>
  )
}
