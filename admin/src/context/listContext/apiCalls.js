import axios from "axios"
import { getListStart, getListSuccess, getListFailure, deleteListStart, deleteListSuccess, deleteListFailure, createListStart, createListSuccess, createListFailure } from "./ListAction"
import { apiUrl } from "../Constants/constants"


// Get list
export const getLists = async (dispatch) => {
    dispatch(getListStart())
    try {
        const res = await axios.get(`${apiUrl}/lists/`, {
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

