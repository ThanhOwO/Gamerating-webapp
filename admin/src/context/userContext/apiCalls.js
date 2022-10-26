import axios from "axios"
import { getUserSuccess, getUserStart, getUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, createUserStart, createUserSuccess, createUserFailure, updateUserSuccess, updateUserFailure, updateUserStart } from "./UserAction"


// Get user
export const getUsers = async (dispatch) => {
    dispatch(getUserStart())
    try {
        const res = await axios.get("users/", {
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
            const res = await axios.post("auth/register", user, {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(createUserSuccess(res.data))
    } catch (error) {
        dispatch(createUserFailure())
    }
}

//Update user
export const updateUsers = async (game, dispatch) => {
    dispatch(updateUserStart())
    try {
            const res = await axios.put("users/", game, {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(updateUserSuccess(res.game))
    } catch (error) {
        dispatch(updateUserFailure())
    }
}

//Delete user
export const deleteUsers = async (id, dispatch) => {
    dispatch(deleteUserStart())
    try {
            await axios.delete("users/" + id, {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(deleteUserSuccess(id))
    } catch (error) {
        dispatch(deleteUserFailure())
    }
}

