// Get game -----------------------------------------
export const getGameStart = () => ({
    type: "GAME_START",
})
export const getGameSuccess = (games) => ({
    type: "GAME_SUCCESS",
    payload: games,
})
export const getGameFailure = () => ({
    type: "GAME_FAILURE", 
})

// Create game -----------------------------------------
export const createGameStart = () => ({
    type: "CREATE_GAME_START",
})
export const createGameSuccess = (game) => ({
    type: "CREATE_GAME_SUCCESS",
    payload: game,
})
export const createGameFailure = () => ({
    type: "CREATE_GAME_FAILURE", 
})

// Update game -----------------------------------------
export const updateGameStart = () => ({
    type: "EDIT_GAME_START",
})
export const updateGameSuccess = (game) => ({
    type: "EDIT_GAME_SUCCESS",
    payload: game,
})
export const updateGameFailure = () => ({
    type: "EDIT_GAME_FAILURE", 
})


// Delete game -----------------------------------------
export const deleteGameStart = () => ({
    type: "DELETE_GAME_START",
})
export const deleteGameSuccess = (id) => ({
    type: "DELETE_GAME_SUCCESS",
    payload: id,
})
export const deleteGameFailure = () => ({
    type: "DELETE_GAME_FAILURE", 
})

