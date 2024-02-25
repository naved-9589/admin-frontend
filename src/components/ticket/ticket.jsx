import React, { useEffect, useRef, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

import { IoCloseOutline } from "react-icons/io5";


const Ticket = () => {
 
    const [showaddticketwindow, setshowaddticketwindow] = useState(false);
    const [ticketlist, setticketlist] = useState([]);

    const [ticketcount, setticketcount] = useState({
        total: 0,
        pending: 0,
        open: 0,
        close: 0
    });

    const ticket = useRef();


    const deleteticket = async(id)=>{
          try {
            
            const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/deleteticket",{
                method: "DELETE",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id})
            })

            const data = await resp.json();
            if(data == "success"){
                getticket();
            }

          } catch (error) {
            console.log(error);
          }
    }

    const getticket = async()=>{
         try {
            
           const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/getticket")
           const data = await resp.json();
           console.log(data)
           setticketlist(data.fetching);
            
           setticketcount({
                total: data.total,
                pending: data.pending,
                open: data.open,
                close: data.close
           })

         } catch (error) {
            console.log(error);
         }
    }


    const saveticket = async()=>{
          try {
           
            const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/addticket", {
                method: "POST",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ticket: ticket.current.value})
                
            })

            const data = await resp.json();
            if(data == "success"){
                getticket(); 
            }
           
            setshowaddticketwindow(false)
          
    
          } catch (error) {
            console.log(error);
          }
    }


    useEffect(()=>{
          getticket();
    },[])

  return (
    <div className="ticket p-4">
        <div className="innerticket">
            <div className="ticketmain">
                <div className="ticketmaininner">
                    <div className="tickettop d-flex justify-content-between">
                         <div style={{ background: "#7352f7" }} className="ticketcard">
                             <p className="m-0">{ticketcount.total}</p>
                             <p>Total Ticket</p>
                         </div>
                         <div style={{ background: "#fdaf77" }} className="ticketcard">
                             <p className="m-0">{ticketcount.pending}</p>
                             <p>Pending Ticket</p>
                         </div>
                         <div style={{ background: "#3ad946" }} className="ticketcard">
                             <p className="m-0">{ticketcount.open}</p>
                             <p>Open Ticket</p>
                         </div>
                         <div style={{ background: "#dd2d2d" }} className="ticketcard">
                             <p className="m-0">{ticketcount.close}</p>
                             <p>Close Ticket</p>
                         </div>
                    </div>
                    <div className="ticketaddbuttonmain mt-4 mb-4 ps-2">
                        <button onClick={()=>setshowaddticketwindow(true)} className="casladdbutton">Add Ticket</button>
                    </div>
                    <div className="ticketmiddle">
                        <table>
                            <thead>
                                <tr className="ticketlist">
                                    <th className="pb-2">no</th>
                                    <th className="pb-2">Ticket</th>
                                    <th className="pb-2">Status</th>
                                    <th className="pb-2">Assigned To</th>
                                    <th className="pb-2">Date</th>
                                    <th className="pb-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ticketlist.map((curr, index)=>{
                                        return(
                                            <tr className="ticketlist">
                                                    <td>{index+1}</td>
                                                    <td>{curr.ticket}</td>
                                                    <td>{curr.status}</td>
                                                    <td>{curr.assign}</td>
                                                    <td>{curr.date}</td>
                                                    <td><RiDeleteBin6Line onClick={()=>deleteticket(curr._id)} className="ticketdelete" /></td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        {
            showaddticketwindow == true ?
            <div className="addticketwindow">
                <div className="text-end">
                  <IoCloseOutline onClick={()=>{ setshowaddticketwindow(false) }} style={{ cursor: "pointer" }}/>
                 </div>  
                <div className="addticketwindowinner">
                    <h5>Raise Ticket</h5>
                    <div>
                        <input ref={ticket} type="text"/>
                    </div>
                    <div className="text-end mt-4">
                        <button onClick={saveticket} className="caslsavebutton">Save</button>
                    </div>
                </div>
            </div>
            : 
            ""
        }
            
      
    </div>
  )
}

export default Ticket
