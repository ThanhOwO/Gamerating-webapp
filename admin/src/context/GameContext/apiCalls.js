import axios from "axios"
import { getGameStart, getGameSuccess, getGameFailure, deleteGameStart, deleteGameSuccess, deleteGameFailure, createGameStart, createGameSuccess, createGameFailure, updateGameStart, updateGameSuccess } from "./GameAction"

// Get game
export const getGames = async (dispatch) => {
    dispatch(getGameStart())
    try {
        const res = await axios.get("games/", {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(getGameSuccess(res.data))
    } catch (error) {
        dispatch(getGameFailure())
    }
}


//Create game
export const createGames = async (game, dispatch) => {
    dispatch(createGameStart())
    try {
            const res = await axios.post("games/", game, {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(createGameSuccess(res.data))
    } catch (error) {
        dispatch(createGameFailure())
    }
}

//Update game
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
export const deleteGames = async (id, dispatch) => {
    dispatch(deleteGameStart())
    try {
            await axios.delete("games/" + id, {
            headers:{
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }})
        dispatch(deleteGameSuccess(id))
    } catch (error) {
        dispatch(deleteGameFailure())
    }
}
