import { createSlice } from "@reduxjs/toolkit";

const notedslice = createSlice({
    name: "note",
    initialState: {
        uploadstatus: "IDLE",
        status: "IDLE",
        data: [],
    },
    reducers:{
        changestatus(state, action){
           state.status = action.payload;
           console.log(action.payload)
        },
        updatenote(state, action){
            state.data = action.payload
            console.log(state.data)
        },
        updatechangestatus(state, action){
             state.uploadstatus = action.payload;
        }
    }
})



export function uploadnote(e, color){
    return async function uploadnotethunk(dispatch, getstate){
        console.log(e)
        console.log(color)
        dispatch(changestatus("LOADING"));
       try {
        
          const data = await fetch("https://admin-dashboard-iiwz.onrender.com/addnote",{
            method: "POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({note: e, color: color})
          });

   
          const resp = await data.json();
            dispatch(updatenote(resp))
            setTimeout(() => {
                dispatch(changestatus("IDLE"))
            }, 1000);
     
     
         
       } catch (error) {
        dispatch(changestatus("ERROR"));
        console.log(error)
       }
    }
}


export function updatenotes(id, note){
   return async function updatenotesthunk(dispatch, getstate){
    dispatch(changestatus("LOADING"));
     try {
        
       const data = await fetch("https://admin-dashboard-iiwz.onrender.com/updatenote",{
        method: "PUT",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id, note: note})
       })
   
       const finaldata = await data.json();
       console.log(finaldata)
       const gettingstate = getstate();
       const finalstate = gettingstate.note.data;


   const newstate = finalstate.map((curr)=>{
      if(curr._id == finaldata._id){
  
                return finaldata
      }

      return curr
   })
      console.log(newstate);
      dispatch(updatenote(newstate));
      setTimeout(() => {
        dispatch(changestatus("IDLE"))
        dispatch(updatechangestatus("SUCCESS"));
    }, 1000);


     setTimeout(() => {
        dispatch(updatechangestatus("IDLE"));
     }, 2000);

     } catch (error) {
        console.log(error)
        dispatch(changestatus("ERROR"));
        dispatch(updatechangestatus("FAIL"));

     }
    
   }
}


export  function deletenote(id){
     return async function deltenotethunk (dispatch, getstate){
         console.log(id)
         try {
            const data = await fetch("https://admin-dashboard-iiwz.onrender.com/deletenote",{
                method: "DELETE",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({id})
       })
        const finaldata = await data.json();
        const gettingstate = getstate();
   console.log(finaldata)
        const newstate = gettingstate.note.data.filter((curr)=>{
             return curr._id !== id
        })
            console.log("filtered")
          dispatch(updatenote(newstate));

         } catch (error) {
            console.log(error);
         }
     }
}


export function searchnote(e){
      return async function searchnotethunk(dispatch, getstate){
            try {
  
                    const data = await fetch("https://admin-dashboard-iiwz.onrender.com/searchnote?search="+e+"")
                    const resp = await data.json();
                    dispatch(updatenote(resp));
                    console.log(resp)
            } catch (error) {
                console.log(error)
            }
      }
}


export const {changestatus, updatenote, updatechangestatus} = notedslice.actions;
export default notedslice.reducer;