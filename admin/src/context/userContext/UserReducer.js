const UserReducer = (state, action) => {
    switch (action.type){
        case "USER_START":
            return{
                users: [],
                isFetching: true,
                error: false,
            };
        case "USER_SUCCESS":
            return{
                users: action.payload,
                isFetching: false,
                error: false,
            }
        case "USER_FAILURE":
            return{
                users: [],
                isFetching: false,
                error: true,
            }

        case "CREATE_USER_START":
            return{
                ...state,
                isFetching: true,
                error: false,
            }
        case "CREATE_USER_SUCCESS":
            return{
                users: [...state.users, action.payload],
                isFetching: false,
                error: false,
            }
        case "CREATE_USER_FAILURE":
            return{
                ...state,
                isFetching: false,
                error: true,
            };

        case "EDIT_USER_START":
            return{
                ...state,
                isFetching: true,
                error: false,
            }
        case "EDIT_USER_SUCCESS":
            return{
                users: state.users.map((user) => user._id === action.payload._id && action.payload),
                isFetching: false,
                error: false,
            }
        case "EDIT_USER_FAILURE":
            return{
                ...state,
                isFetching: false,
                error: true,
            };

        case "DELETE_USER_START":
            return{
                ...state,
                isFetching: true,
                error: false,
            };
        case "DELETE_USER_SUCCESS":
            return{
                users: state.users.filter((user)=> user._id !== action.payload),
                isFetching: false,
                error: false,
            }
        case "DELETE_USER_FAILURE":
            return{
                ...state,
                isFetching: false,
                error: true,
            }
        default:
            return {...state}
    }
}

export default UserReducer