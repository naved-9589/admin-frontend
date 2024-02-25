import React, { useEffect, useRef, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";

const Casl = () => {

   const [showuserpage, setshowusepage] = useState(false);
   const [adduserrole, setadduserrole] = useState("subscriber")

   const [userlist, setuserlist] = useState([]);
   const [searchrole, setsearchrole] = useState("admin");

   const name = useRef();
   const email = useRef();

  const adduserwindow = ()=>{
    setshowusepage(true);
  }

  const handlechange = (e)=>{
     setadduserrole(e.target.value)
     
     console.log(e.target.value)
  }

  const sortusers = (e)=>{
    setsearchrole(e);
  }

  const fetchaluser = async()=>{
      try {
        
        const secondresp = await fetch("https://admin-dashboard-iiwz.onrender.com/getusers?role="+searchrole+"")
        const finaldata = await secondresp.json();
        setuserlist(finaldata);
        console.log(finaldata);

      } catch (error) {
        console.log(error);
      }
  }

  const saveuserdata = async()=>{
    try {
      
    const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/adduser", {
        method: "POST",
          headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: name.current.value, email: email.current.value, role: adduserrole})
          
      })

      const data = await resp.json();
      if(data == "success"){
        fetchaluser();
      }

    } catch (error) {
      console.log(error)
    }
      console.log(name.current.value)
      console.log(email.current.value)
      console.log(adduserrole)
  }


  useEffect(()=>{
    fetchaluser();
  },[searchrole])

  return (
    <div className="casl">
       <div className="caslinner p-4">
            <div className="caslmain">
                <div className="casltop">
                    <h4>Roll Access</h4>
                </div>
                <div className="caslmiddle">
                    <div className="caslbuttonmain">
                        <button style={{ background: searchrole == "admin" ? "#2323f3" : "", color: searchrole == "admin" ? "#ffffff" :""}} onClick={()=>sortusers("admin")} className="casl1">Admin</button>
                        <button style={{ background: searchrole == "manager" ? "#2323f3" : "", color: searchrole == "manager" ? "#ffffff" :""}} onClick={()=>sortusers("manager")} className="casl2">Manager</button>
                        <button style={{ background: searchrole == "subscriber" ? "#2323f3" : "", color: searchrole == "subscriber" ? "#ffffff" :""}} onClick={()=>sortusers("subscriber")} className="casl3">SubscriberReadoOnly</button>
                    </div>
                    <div className="casladdbuttonmain mt-4">
                      <button onClick={adduserwindow} className="casladdbutton">Add user</button>
                    </div>
                </div>
                <div className="caslbottom">
                  <ul>
                    {
                      userlist.map((curr)=>{
                         return (
                          <li className="userlist">{curr.name}</li>
                         )
                      })
                    }
                  </ul>
                </div>
            </div>
       </div>
       {
        showuserpage == true ?
        <div className="useraddwindow">
        <h5>Add User <span onClick={()=> setshowusepage(false)} className="caslclose"><IoCloseOutline/></span></h5>
        
          <div className="useraddwindowinner">
            <div className="mt-4 mb-2">
              <input type="text" placeholder='name' ref={name}/>
            </div>
            <div className="mt-4 mb-2">
              <input type="text" placeholder='email' ref={email}/>
            </div>
            <div className="mt-4 mb-2">
              <select onChange={handlechange}>
                <option>select</option>
                <option value="admin">admin</option>
                <option value="manager">manages</option>
                <option value="subscriber">subscriber</option>
              </select>
            </div>
            <div className="mt-4 mb-2 text-end">
              <button className="caslsavebutton" onClick={saveuserdata}>Save</button>
            </div>
          </div>
       </div>
        :
        ""
       }
       
    </div>
  )
}

export default Casl
