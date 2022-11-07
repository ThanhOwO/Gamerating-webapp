// Get list -----------------------------------------
export const getListStart = () => ({
    type: "LISTS_START",
})
export const getListSuccess = (lists) => ({
    type: "LISTS_SUCCESS",
    payload: lists,
})
export const getListFailure = () => ({
    type: "LISTS_FAILURE", 
})

// Create list -----------------------------------------
export const createListStart = () => ({
    type: "CREATE_LIST_START",
})
export const createListSuccess = (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list,
})
export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE", 
})


// Delete list -----------------------------------------
export const deleteListStart = () => ({
    type: "DELETE_LIST_START",
})
export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
})
export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE", 
})

