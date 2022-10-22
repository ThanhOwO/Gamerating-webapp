import GameReducer from "./GameReducer";
import {createContext, useReducer} from "react"


const INITIAL_STATE = {
    games: [],
    isFetching: false,
    error: false,
};

export const GameContext = createContext(INITIAL_STATE)



export const GameContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE)

    

    return(
        <GameContext.Provider value={{games: state.games, isFetching: state.isFetching, error: state.error, dispatch}}>
            {children}
        </GameContext.Provider>
    )
}