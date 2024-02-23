import { asyncThunkCreator, buildCreateSlice, createSlice } from "@reduxjs/toolkit";


const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

//Slice de Redux
//aqui se encuentran el reducer y selector de la variable global de la app
export const userSlice = createAppSlice({
  name:'user',
  initialState:{userid:0},
  reducers:{
    addUser:(state, action)=>{
      state.userid = action.payload
      console.log(action.payload, state.userid)
      debugger
    }
  },selectors:{
    selectUser:(state:any)=> state.userid
    
  }
  

})
export const {addUser} = userSlice.actions
export default userSlice.reducer
export const {selectUser} = userSlice.selectors