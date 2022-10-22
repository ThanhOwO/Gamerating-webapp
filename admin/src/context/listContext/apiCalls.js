import axios from "axios"
import { getListStart, getListSuccess, getListFailure, deleteListStart, deleteListSuccess, deleteListFailure, createListStart, createListSuccess, createListFailure } from "./ListAction"

// Get list
export const getLists = async (dispatch) => {
    dispatch(getListStart())
    try {
        const res = await axios.get("lists/", {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(getListSuccess(res.data))
    } catch (error) {
        dispatch(getListFailure())
    }
}


//Create list
export const createList = async (list, dispatch) => {
    dispatch(createListStart())
    try {
            const res = await axios.post("lists/", list, {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(createListSuccess(res.data))
    } catch (error) {
        dispatch(createListFailure())
    }
}

//Update list
/* export const updateGames = async (id, dispatch) => {
    dispatch(updateGameStart())
    try {
            await axios.put("games/"+ id, {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(updateGameSuccess(id))
    } catch (error) {
        dispatch(createGameFailure())
    }
} */

//Delete game
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart())
    try {
            await axios.delete("lists/" + id, {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(deleteListSuccess(id))
    } catch (error) {
        dispatch(deleteListFailure())
    }
}

