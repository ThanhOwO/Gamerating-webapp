import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import GameList from "./pages/GameList/GameList";
import {useContext} from "react"
import { AuthContext } from './context/authContext/AuthContext'
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";


function App() {
  const {user} = useContext(AuthContext)

  return (
    <Router>
      <Switch>
          <Route exact path="/login">
            {user ? <Redirect to="/home" /> :
              <Login/>
            }</Route>

          {user && 
          <>
            <Topbar />
            <div className="container">
            <Sidebar />
            <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/games">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/lists">
                <GameList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
          </>
          }

          <Route path="*">
            <Redirect to={user ? "/home" : "/login"} />
          </Route> 
      </Switch>
    </Router>
  );
}

export default App;
