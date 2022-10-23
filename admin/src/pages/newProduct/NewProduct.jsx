import { useContext, useState } from "react";
import { createGames } from "../../context/GameContext/apiCalls";
import "./newProduct.css";
import {GameContext} from "../../context/GameContext/GameContext"
import { useHistory } from "react-router-dom";

export default function NewProduct() {

  const [game, setGame] = useState(null)
  const {dispatch} = useContext(GameContext)
  const history = useHistory()


  const handleChange = (e) => {
    const value = e.target.value;
    setGame({...game, [e.target.name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createGames(game, dispatch)
    history.push("/games")
  }



  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Game</h1>
      <form className="addProductForm">
      <div className="addProductItem">
          <label>Game Title</label>
          <input type="text" placeholder="Game title" name="title" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Game Description</label>
          <input type="text" placeholder="Game description" name="desc" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Game Image Background</label>
          <input type="text" placeholder="Add image url here" name="img" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Game Logo Image</label>
          <input type="text" placeholder="Add image url here" name="imgLogo" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Game Card Image</label>
          <input type="text" placeholder="Add image url here" name="imgSm" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Game Trailer</label>
          <input type="text" placeholder="Add image url here" name="trailer" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Game Trailer 2</label>
          <input type="text" placeholder="Add image url here" name="trailer2" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Game Trailer 3</label>
          <input type="text" placeholder="Add image url here" name="trailer3" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Game Trailer 4</label>
          <input type="text" placeholder="Add image url here" name="trailer4" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Video Trailer</label>
          <input type="text" placeholder="Add video embed url here" name="video" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Game Release Year</label>
          <input type="text" placeholder="Game release year" name="year" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Age limit</label>
          <input type="text" placeholder="Ex: 16+" name="limit" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Game genre (main)</label>
          <input type="text" placeholder="Game genre" name="genre" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Game genre 2 (option)</label>
          <input type="text" placeholder="Game genre" name="genre2" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Game genre 3 (option)</label>
          <input type="text" placeholder="Game genre" name="genre3" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="active" id="isSeries">
            <option value="false">No</option>
          </select>
        </div>
        <button className="addProductButton" onClick={{handleSubmit}} >Create</button>
      </form>
    </div>
  );
}
