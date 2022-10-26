import { Link, useLocation, useHistory } from "react-router-dom";
import "./product.css";
import { useState, useContext } from "react";
import {GameContext} from "../../context/GameContext/GameContext"
import { updateGames } from "../../context/GameContext/apiCalls";

export default function Product() {

    const location = useLocation()
    const lgame = location.game;

    const [game, setGame] = useState(null)
    const {dispatch} = useContext(GameContext)
    const history = useHistory()


    const handleChange = (e) => {
        const value = e.target.value;
        setGame({...game, [e.target.name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateGames(game, dispatch)
        history.push("/games")
    }

    
  return (
    <div className="product" onSubmit={handleSubmit}>
      <div className="productTitleContainer">
        <h1 className="productTitle">Game</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create New</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={lgame?.img} alt="" className="productInfoImg" />
                  <span className="productName">{lgame?.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{lgame?._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      <span className="productInfoValue">{lgame?.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre2:</span>
                      <span className="productInfoValue">{lgame?.genre2}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre3:</span>
                      <span className="productInfoValue">{lgame?.genre3}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">year:</span>
                      <span className="productInfoValue">{lgame?.year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">limit:</span>
                      <span className="productInfoValue">{lgame?.limit}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">

                  <label>Game title</label>
                  <input type="text" placeholder={lgame?.title} name="title" onChange={handleChange} />
                  <label>Description</label>
                  <input type="text" placeholder={lgame?.desc} name="desc" onChange={handleChange} />
                  <label>Image background</label>
                  <input type="text" placeholder={lgame?.img} name="img" onChange={handleChange} />
                  <label>Game logo image</label>
                  <input type="text" placeholder={lgame?.imgTitle} name="imgTitle" onChange={handleChange} />
                  <label>Small card game image</label>
                  <input type="text" placeholder={lgame?.imgSm} name="imgSm" onChange={handleChange} />
                  <label>Trailer 1 image</label>
                  <input type="text" placeholder={lgame?.trailer} name="trailer" onChange={handleChange} />
                  <label>Trailer 2 image</label>
                  <input type="text" placeholder={lgame?.trailer2} name="trailer2" onChange={handleChange}/>
                  <label>Trailer 3 image</label>
                  <input type="text" placeholder={lgame?.trailer3} name="trailer3" onChange={handleChange}/>
                  <label>Trailer 4 image</label>
                  <input type="text" placeholder={lgame?.trailer4} name="trailer4" onChange={handleChange}/>
                  <label>Video trailer</label>
                  <input type="text" placeholder={lgame?.video} name="video" onChange={handleChange}/>
                  <label>Release Year</label>
                  <input type="text" placeholder={lgame?.year} name="year" onChange={handleChange}/>
                  <label>Limited age</label>
                  <input type="text" placeholder={lgame?.limit} name="limit" onChange={handleChange}/>
                  <label>Genre 1</label>
                  <input type="text" placeholder={lgame?.genre} name="genre" onChange={handleChange}/>
                  <label>Genre 2</label>
                  <input type="text" placeholder={lgame?.genre2} name="genre2" onChange={handleChange}/>
                  <label>Genre 3</label>
                  <input type="text" placeholder={lgame?.genre3} name="genre3" onChange={handleChange}/>
 
              </div>
          </form>
      </div>

      <div className="productBottom">
          <form className="productForm">
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={lgame?.img} alt="" className="productUploadImg" />

                  </div>
                  <div className="productUpload">
                      <img src={lgame?.imgTitle} alt="" className="productUploadImg" />

                  </div>
                  <div className="productUpload">
                      <img src={lgame?.imgSm} alt="" className="productUploadImg" />

                  </div>
                  <div className="productUpload">
                      <img src={lgame?.trailer} alt="" className="productUploadImg" />
  
                  </div>
                  <div className="productUpload">
                      <img src={lgame?.trailer2} alt="" className="productUploadImg" />

                  </div>
                  <div className="productUpload">
                      <img src={lgame?.trailer3} alt="" className="productUploadImg" />

                  </div>
                  <div className="productUpload">
                      <img src={lgame?.trailer4} alt="" className="productUploadImg" />
 
                  </div>  
                <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
