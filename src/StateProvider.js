// SetUp data Layer
//we need this to  track basket
import React, {createContext,useContext,useReducer, useReducer} from "react";


// this is the data layer
const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({reducer,initialState,children})=>(
   <StateContext.Provider  value ={useReducer(reducer,initialState)} >
    {children}
   </StateContext.Provider>   
);


//This  is how we use inside  of a component
export const useStateValue = () => useContext(StateContext);
 


