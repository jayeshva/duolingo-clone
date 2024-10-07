import React, { createContext,useReducer } from 'react'

export const GlobalContext = createContext();

const initialState = {
    loginView: false,
    auth:false
  };

  const globalReducer = (state, action) => {
    switch (action.type){
      case "REGISTER":
        return { ...state, loginView:false, auth:true };
      case "LOGIN":
        return { ...state, loginView:true, auth:true};
      case "DASHBOARD":
        return {...state, auth: false};
      default:
        return {...state, auth: false};
    }
  }

function GlobalProvider({children}) {
    const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
   <GlobalContext.Provider value={{state,dispatch}}>{children}</GlobalContext.Provider>
  )
}

export default GlobalProvider