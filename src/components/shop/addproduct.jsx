import React, { useRef, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import FormData from "form-data";
import { useDispatch } from 'react-redux';
import { changetoggle } from '../../redux/slices/productslice';

const Addproduct = () => {

    const [catogary, setcatogary] = useState();
    const [file, setfile] = useState();

    const [loader, setloader] = useState(false)

    const dispatch = useDispatch();



    const name = useRef();
    const price = useRef();

    const handleselect = (e)=>{
        setcatogary(e.target.value);
        console.log(e.target.value);
    }

    const handlefile = (e)=>{
        setfile(e.target.files[0])
        console.log(e.target.files[0])
    }

    
   const handlesubmit = async(e)=>{
    e.preventDefault();
    setloader(true);
   let formdata = new FormData();
 
    formdata.append("image", file);
    formdata.append('name', name.current.value)
    formdata.append('catogary', catogary)
    formdata.append('price', price.current.value)


    let resp = await fetch("https://admin-dashboard-iiwz.onrender.com/addproduct", {
     method: 'POST',
     body: formdata,
    
    })
     const data = await resp.json();
    if(data == "success"){
        setloader(false)
        dispatch(changetoggle(false))
    }

}


  return (
    <div className="addproducts">
         <div style={{ display: loader == true ? "block" : "none" }} className="loader"></div>
       <div className="addproductinner">
            <div className="addproductfields">
                <div className="text-end">
                    <IoCloseOutline className="fs-4" style={{ color: "#ff003b", cursor: "pointer" }} onClick={()=>{ dispatch(changetoggle(false)) }}/>
                </div>
                <div className="mt-2 mb-2">
                    <p className="m-0">Name</p>
                    <input type="text" ref={name}/>
                </div>
                <div className="mt-2 mb-2">
                    <p className="m-0">Price</p>
                    <input type="text" ref={price}/>
                </div>
                <div className="mt-2 mb-2">
                    <p className="m-0">catogary</p>
                    <select className="mt-2 mb-2" onChange={handleselect}>
                        <option value=""></option>
                        <option value="icecream">icecream</option>
                        <option value="vagitable">vagitable</option>
                        <option value="toy">toy</option>
                        <option value="all">all</option>
                    </select>
                </div>
                <div className="mt-2 mb-2">
                    <p className="m-0">Image</p>
                    <input className="mt-2 mb-2" type="file" onChange={handlefile}/>
                </div>
                <div className="mt-2 mb-2 text-end">
                    <button className="productaddbutton" onClick={handlesubmit}>Save</button>
                </div>
               
            </div>
       </div>
    </div>
  )
}

export default Addproduct
