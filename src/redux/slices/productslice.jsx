import { createSlice } from "@reduxjs/toolkit";



const productslice = createSlice({
    name: "product",
    initialState:{
        showwindow: false,
        data: []
    },
    reducers:{
        changetoggle(state, action){
            state.showwindow = action.payload;
           
         },
         setdata(state, action){
            state.data = action.payload;
           
         },
    }
})


export function fetchproduct(catogary, price){
    return async function fetchproductthunk(dispatch, getstate){
        try {
            console.log(catogary, price)

            let finalcatogary = "catogary=" + catogary;
            let finalprice = "price=" + price;
            if(finalprice == "price=" || catogary == undefined){
                 finalprice = "";
            }

            if(finalcatogary == "catogary=" || price == undefined){
                finalcatogary = "";
           }

           console.log(finalcatogary, finalprice);
            const resp = await fetch(`https://admin-dashboard-iiwz.onrender.com/fetchproducts?${finalcatogary}&&${finalprice}`)
             const data = await resp.json();
             dispatch(setdata(data));

        } catch (error) {
            console.log(error);
        }
    }
}


export const {changetoggle, setdata} = productslice.actions;
export default productslice.reducer