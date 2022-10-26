
import Home from "./pages/Home/Home";
import "./app.scss"
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Dailynew from "./pages/DailyNew/Dailynew";


const App = () => {

  const {user} = useContext(AuthContext);
  return (
  <BrowserRouter>
    <Routes>
      {!user && (
        <>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </>
      )}

      {user && (
        <>
          <Route exact path="/" element={ <Home />} />
          <Route path="/series" element={<Home type="series"/>} />
          <Route path="/games" element={<Home type="games"/>} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/dailynew" element={<Dailynew/>} />
        </>
      )}

        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />

    </Routes>
  </BrowserRouter>
  );
};

export default App;