import { createSlice } from "@reduxjs/toolkit";


const authslice = createSlice({
    name: "auth",
    initialState:{
        user: "",
    },
    reducers:{
        setuser(state, action){
            state.user = action.payload;
           
         },
         settoken(state, action){
            state.data = action.payload;
           
         },
    }
})


export function userlogin(username, password){
     return async function userloginthunk(dispatch, getstate){
           try {
            console.log(username, password)
            const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/login",{
                method: "POST",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username, password: password})
            })

            const data = await resp.json();
            if(data.username){
                  dispatch(setuser(data.username))
            }
            console.log(data)

           } catch (error) {
            console.log(error);
           }
     }
} 


export const {setuser} = authslice.actions;
export default authslice.reducer