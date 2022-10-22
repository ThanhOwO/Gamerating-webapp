const GameReducer = (state, action) => {
    switch (action.type){
        case "GAME_START":
            return{
                games: [],
                isFetching: true,
                error: false,
            };
        case "GAME_SUCCESS":
            return{
                games: action.payload,
                isFetching: false,
                error: false,
            }
        case "GAME_FAILURE":
            return{
                games: [],
                isFetching: false,
                error: true,
            }

        case "CREATE_GAME_START":
            return{
                ...state,
                isFetching: true,
                error: false,
            }
        case "CREATE_GAME_SUCCESS":
            return{
                games: [...state.games, action.payload],
                isFetching: false,
                error: false,
            }
        case "CREATE_GAME_FAILURE":
            return{
                ...state,
                isFetching: false,
                error: true,
            };

        /* case "EDIT_GAME_START":
            return{
                ...state,
                isFetching: true,
                error: false,
            }
        case "EDIT_GAME_SUCCESS":
            return{
                games: state.games.map((game) => game._id === action.payload._id && action.payload),
                isFetching: false,
                error: false,
            }
        case "EDIT_GAME_FAILURE":
            return{
                ...state,
                isFetching: false,
                error: true,
            }; */

        case "DELETE_GAME_START":
            return{
                ...state,
                isFetching: true,
                error: false,
            };
        case "DELETE_GAME_SUCCESS":
            return{
                games: state.games.filter((movie)=> movie._id !== action.payload),
                isFetching: false,
                error: false,
            }
        case "DELETE_GAME_FAILURE":
            return{
                ...state,
                isFetching: false,
                error: true,
            }
        default:
            return {...state}
    }
}

export default GameReducer