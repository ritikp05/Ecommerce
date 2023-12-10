import React, { useContext } from 'react'
import { DataContext } from '../Context/AppContext'
// import { TextField } from '@mui/material'
const SearchProduct = () => {
    const {state,dispatch}=useContext(DataContext)

    function changeHandler(e){

dispatch({type:"Add_Query",payload:e.target.value})
    }

  return (
        <input type='text' placeholder='Search product' className=' border-2 mx-auto sm:mx-0 mb-2 py-1 pl-2 focus:outline-none' onChange={changeHandler} value={state.query}/>
   
  )
}

export default SearchProduct