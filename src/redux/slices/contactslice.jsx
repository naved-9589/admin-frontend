import { createSlice } from "@reduxjs/toolkit";


const contactslice = createSlice({
    name: "contact",
    initialState:{
        toggle: false,
        data: []
    },
    reducers:{
        changetoggle(state, action){
            state.toggle = action.payload;
           
         },
         setdata(state, action){
            state.data = action.payload;
           
         },
    }
})


export function addcontacts(fname, lname, company, email, notes, dipartment, phone, address){
     return async function addcontactsthunk(dispatch, getstate){
             try {
                console.log(fname, lname, company, email, notes, dipartment, phone, address)
                const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/addcontact",{
                    method: "POST",
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({fname, lname, company, email, notes, dipartment, phone, address})
                }) 
                const data = await resp.json();
                dispatch(setdata(data));
             } catch (error) {
                console.log(error)
             }
     }
}


export function updatecontact(e){
     return async function updatecontankthunk(dispatch, getstate){
           try {
          
            const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/updatecontact", {
                method: "PUT",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
               
                body: JSON.stringify({e})
                
            })
            
            const data = await resp.json();
            const stategatting = getstate();
            console.log(stategatting)
            
             const finalstate = stategatting.contact.data.map((curr)=>{
                 if(curr._id == data._id){
                      return data
                 }
                 return curr;
            })

             dispatch(setdata(finalstate));

           } catch (error) {
            console.log(error);
           }
     }
}


export function deletecontact(e){
    return async function deletecontactthunk(dispatch, getstate){
          try {
            
            const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/deletecontact", {
                method: "DELETE",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
               
                body: JSON.stringify({e})
                
            })

            const data = await resp.json();
            const gettingstate = getstate();

            const finaldata = gettingstate.contact.data.filter((curr)=>{
                 return curr._id !== data._id 
            })

            dispatch(setdata(finaldata));

          } catch (error) {
            console.log(error)
          }
    }
}


export function searchcontact(e){
      return async function searchcontactthunk(dispatch, getstate){
              try {
                console.log(e)
                const fetching = await fetch("https://admin-dashboard-iiwz.onrender.com/searchcontact?search="+e+"")
                const finaldata = await fetching.json(); 

                dispatch(setdata(finaldata));

              } catch (error) {
                console.log(error);
              }
      }
}



export function filtercontacts(e){
      return async function filtercontactsthunk(dispatch, getstate){
           try {
            
             const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/filtercontact?catogary="+e+"")
             const data = await resp.json();
                dispatch(setdata(data));
           } catch (error) {
            console.log(error);
           }
      }
}


export function updatecontactrate(e){
     return async function updatecontactratethunk(dispatch, getstate){
                    try {
                        
                        const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/updatecontactrate", {
                            method: "PATCH",
                            headers:{
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({e})
                        })
                        const data = await resp.json();
                        console.log(data)
                        const stategatting = getstate();
                        console.log(stategatting)
            
                        const finalstate = stategatting.contact.data.map((curr)=>{
                        if(curr._id == data._id){
                                return data
                            }
                                return curr;
                        })
                        dispatch(setdata(finalstate));

                    } catch (error) {
                        console.log(error);
                    }
     }
}


export const {changetoggle, setdata} = contactslice.actions;
export default contactslice.reducer