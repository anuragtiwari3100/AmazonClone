export const initialState ={
    basket: [],
};
 

 const  reducer =(state,action)=>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
        //logic for adding iteam to basket
        return {state}
      
        case 'REMOVING_FROME_BASKET':
    //logic  for removing from basket
    return {state}
 
    default:
         return state;
    }

 }
 export default reducer;
