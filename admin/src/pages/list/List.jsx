import { Link, useLocation, useHistory } from "react-router-dom";
import "./list.css";
import { useState } from "react";
import axios from "axios";

export default function List() {
    const location = useLocation()
    const list = location.list;

    const [lists, setLists] = useState(null)
    const history = useHistory()


    const handleChange = (e) => {
        const value = e.target.value;
        setLists({...lists, [e.target.name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault();
        try {        
            await axios.put(`http://localhost:8800/api/lists/${list._id}`, lists, {
              headers:{
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
              }
             })
            history.push("/lists")
        } catch (error) {
          console.log(error.response)
        }
      }

  return (
    <div className="product" onSubmit={handleSubmit}>
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create New</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <span className="productName">{list?.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{list?._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      <span className="productInfoValue">{list?.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">type:</span>
                      <span className="productInfoValue">{list?.type}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom" >
          <form className="productForm">
              <div className="productFormLeft">

                  <label>List title</label>
                  <input type="text" placeholder={list?.title} name="title" onChange={handleChange} />
                  <label>Type</label>
                  <input type="text" placeholder={list?.type} name="type" onChange={handleChange} />
                  <label>Genre</label>
                  <input type="text" placeholder={list?.genre} name="genre" onChange={handleChange} />
              </div>
          </form>
      </div>

      <div className="productBottom">
          <form className="productForm">
              <div className="productFormRight">
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
