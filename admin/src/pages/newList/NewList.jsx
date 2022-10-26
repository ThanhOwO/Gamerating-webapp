import { useContext, useEffect, useState } from "react";
import { getGames } from "../../context/GameContext/apiCalls";
import "./newList.css";
import {GameContext} from "../../context/GameContext/GameContext"
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";
import { useHistory } from "react-router-dom";


export default function NewList() {

  const [list, setList] = useState(null)
  const history = useHistory()
  const {dispatch} = useContext(ListContext)
  const {games, dispatch: dispatchGame} = useContext(GameContext)

  useEffect(() => {
    getGames(dispatchGame)
  }, [dispatchGame])


  const handleChange = (e) => {
    const value = e.target.value;
    setList({...list, [e.target.name]: value})
  }

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value)
    setList({...list, [e.target.name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch)
    history.push("/list")
  }


  return (
    <div className="newProduct" onSubmit={handleSubmit}>
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
      <div className="formLeft">
        <div className="addProductItem">
            <label>Game Title</label>
            <input type="text" placeholder="List title" name="title" onChange={handleChange} required/>
            </div>
            <div className="addProductItem">
            <label>Genre</label>
            <input type="text" placeholder="List genre" name="genre" onChange={handleChange} required/>
            </div>
            <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
                <option>Type</option>
                <option value="games">Game</option>
            </select>
            </div>
        </div>
        <div className="formRight">
        <div className="addProductItem">
          <label>Content</label>
          <select multiple name="content" onChange={handleSelect} style={{height:"280px"}}>
            {games.map(games=> (
                <option key={games._id} value={games._id}>{games.title}</option>
            ))}
          </select>
        </div>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
