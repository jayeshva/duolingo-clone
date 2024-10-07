import React, { useContext } from 'react'
import Register from './Register'
import { GlobalContext } from '../../hooks/GlobalProvider';
import Login from './Login';

function Authenticate() {
    const {state,dispatch} = useContext(GlobalContext);
  return (
    <div>
        {state.loginView == true ? <Login/> : <Register/>}
    </div>
  )
}

export default Authenticate