import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { useState, useContext } from "react";
import {GameContext} from "../../context/GameContext/GameContext"
import { updateGames } from "../../context/GameContext/apiCalls";

export default function Product() {
    const location = useLocation()
    const game = location.game;

    /* const [games, setGames] = useState(null)
    const {dispatch} = useContext(GameContext)

    const handleChange = (e) => {
        const value = e.target.value;
        setGames({...games, [e.target.name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateGames(games, dispatch)
    }

    console.log(games) */

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Game</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create New</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={game.img} alt="" className="productInfoImg" />
                  <span className="productName">{game.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{game._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      <span className="productInfoValue">{game.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre2:</span>
                      <span className="productInfoValue">{game.genre2}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre3:</span>
                      <span className="productInfoValue">{game.genre3}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">year:</span>
                      <span className="productInfoValue">{game.year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">limit:</span>
                      <span className="productInfoValue">{game.limit}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">

                  <label>Game title</label>
                  <input type="text" placeholder={game.title} />
                  <label>Description</label>
                  <input type="text" placeholder={game.desc} />
                  <label>Image background</label>
                  <input type="text" placeholder={game.img} />
                  <label>Game logo image</label>
                  <input type="text" placeholder={game.imgTitle} />
                  <label>Small card game image</label>
                  <input type="text" placeholder={game.imgSm} />
                  <label>Trailer 1 image</label>
                  <input type="text" placeholder={game.trailer} />
                  <label>Trailer 2 image</label>
                  <input type="text" placeholder={game.trailer2} />
                  <label>Trailer 3 image</label>
                  <input type="text" placeholder={game.trailer3} />
                  <label>Trailer 4 image</label>
                  <input type="text" placeholder={game.trailer4} />
                  <label>Video trailer</label>
                  <input type="text" placeholder={game.video} />
                  <label>Release Year</label>
                  <input type="text" placeholder={game.year} />
                  <label>Limited age</label>
                  <input type="text" placeholder={game.limit} />
                  <label>Genre 1</label>
                  <input type="text" placeholder={game.genre} />
                  <label>Genre 2</label>
                  <input type="text" placeholder={game.genre2} />
                  <label>Genre 3</label>
                  <input type="text" placeholder={game.genre3} />
 
              </div>
          </form>
      </div>

      <div className="productBottom">
          <form className="productForm">
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={game.img} alt="" className="productUploadImg" />

                  </div>
                  <div className="productUpload">
                      <img src={game.imgTitle} alt="" className="productUploadImg" />

                  </div>
                  <div className="productUpload">
                      <img src={game.imgSm} alt="" className="productUploadImg" />

                  </div>
                  <div className="productUpload">
                      <img src={game.trailer} alt="" className="productUploadImg" />
  
                  </div>
                  <div className="productUpload">
                      <img src={game.trailer2} alt="" className="productUploadImg" />

                  </div>
                  <div className="productUpload">
                      <img src={game.trailer3} alt="" className="productUploadImg" />

                  </div>
                  <div className="productUpload">
                      <img src={game.trailer4} alt="" className="productUploadImg" />
 
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
