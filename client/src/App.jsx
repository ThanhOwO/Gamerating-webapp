
import Home from "./pages/Home/Home";
import "./app.scss"
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import PrivateRoute from "./utils/PrivateRoute";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


const App = () => {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<PrivateRoute/>}>
      </Route>
        <Route exact path="/" element={ <Home />} />
        <Route path="/series" element={<Home type="series"/>} />
        <Route path="/games" element={<Home type="games"/>} />
        <Route path="/watch" element={<Watch />} />

    </Routes>
  </BrowserRouter>
  );
};

export default App;