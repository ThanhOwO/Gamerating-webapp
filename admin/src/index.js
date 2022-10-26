import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContextProvider} from "./context/authContext/AuthContext"
import { GameContextProvider } from './context/GameContext/GameContext';
import { ListContextProvider } from './context/listContext/ListContext';
import { UserContextProvider } from './context/userContext/UserContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GameContextProvider>
        <ListContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </ListContextProvider>
      </GameContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
