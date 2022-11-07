// Get user -----------------------------------------
export const getUserStart = () => ({
    type: "USER_START",
})
export const getUserSuccess = (users) => ({
    type: "USER_SUCCESS",
    payload: users,
})
export const getUserFailure = () => ({
    type: "USER_FAILURE", 
})

// Create user -----------------------------------------
export const createUserStart = () => ({
    type: "CREATE_USER_START",
})
export const createUserSuccess = (user) => ({
    type: "CREATE_USER_SUCCESS",
    payload: user,
})
export const createUserFailure = () => ({
    type: "CREATE_USER_FAILURE", 
})


// Delete user -----------------------------------------
export const deleteUserStart = () => ({
    type: "DELETE_USER_START",
})
export const deleteUserSuccess = (id) => ({
    type: "DELETE_USER_SUCCESS",
    payload: id,
})
export const deleteUserFailure = () => ({
    type: "DELETE_USER_FAILURE", 
})

