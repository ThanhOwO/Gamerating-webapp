import axios from "axios"
import { getUserSuccess, getUserStart, getUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, createUserStart, createUserSuccess, createUserFailure} from "./UserAction"
import { apiUrl } from "../Constants/constants"

// Get user
export const getUsers = async (dispatch) => {
    dispatch(getUserStart())
    try {
        const res = await axios.get(`${apiUrl}/users/`, {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(getUserSuccess(res.data))
    } catch (error) {
        dispatch(getUserFailure())
    }
}


//Create user
export const createUsers = async (user, dispatch) => {
    dispatch(createUserStart())
    try {
            const res = await axios.post(`${apiUrl}/auth/register`, user, {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(createUserSuccess(res.data))
    } catch (error) {
        dispatch(createUserFailure())
    }
}


//Delete user
export const deleteUsers = async (id, dispatch) => {
    dispatch(deleteUserStart())
    try {
            await axios.delete(`${apiUrl}/users/` + id, {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(deleteUserSuccess(id))
    } catch (error) {
        dispatch(deleteUserFailure())
    }
}

