import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContextProvider} from "./context/authContext/AuthContext"
import { GameContextProvider } from './context/GameContext/GameContext';
import { ListContextProvider } from './context/listContext/ListContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GameContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </GameContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
