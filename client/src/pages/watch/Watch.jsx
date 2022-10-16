import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <iframe className="video" src="https://www.youtube.com/embed/iqysmS4lxwQ?control=1"></iframe>
    </div>
  )
}
