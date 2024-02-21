import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { IoCloseOutline } from "react-icons/io5";
import { changetoggle } from '../../redux/slices/contactslice';
import { addcontacts } from '../../redux/slices/contactslice';


const Addcontact = () => {

  const dipartment = useRef();  
  const phone = useRef();
  const address = useRef();
  const fname = useRef();
  const lname = useRef();
  const company = useRef();
  const email = useRef();
  const notes = useRef();
  
 
  const dispatch = useDispatch();

   const addcontact = ()=>{
     dispatch(addcontacts(fname.current.value, lname.current.value, company.current.value, email.current.value, notes.current.value, dipartment.current.value, phone.current.value, address.current.value))
    console.log(fname.current.value)
   }

  return (
    <div className="addcontact">
      <div className="inneraddcontact">
        <div className="topadd">
          <div>
            <h6>Add Contact</h6>
          </div>
          <div>
            <button className="btn p-0 fs-4" onClick={()=>{ dispatch(changetoggle(false)) }}><IoCloseOutline /></button>
          </div>
        </div>
        <div className="addmiddle">
          <div className="inneraddbottom row">
            <div className="col-lg-6">
              <div className="text-center">
                <img className="addcontactimage" src='/images/user.jpg' />
              </div>
              <div className="inputboxxes">
                <div className="inputbox">
                  <h6>Dipartment</h6>
                  <input type="text" ref={dipartment}/>
                </div>
                <div className="inputbox">
                  <h6>Phone</h6>
                  <input type="text" ref={phone}/>
                </div>
                <div className="inputbox">
                  <h6>Address</h6>
                  <input type="text" ref={address}/>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inputboxxes">
                <div className="inputbox">
                  <h6>First Name</h6>
                  <input type="text" ref={fname}/>
                </div>
                <div className="inputbox">
                  <h6>Last Name</h6>
                  <input type="text" ref={lname}/>
                </div>
                <div className="inputbox">
                  <h6>Company</h6>
                  <input type="text" ref={company}/>
                </div>
                <div className="inputbox">
                  <h6>Email</h6>
                  <input type="text" ref={email}/>
                </div>
                <div className="inputbox">
                  <h6>Notes</h6>
                  <input type="text" ref={notes}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addbottom text-end p-4">
           <button className="finaladdbutton" onClick={addcontact}>Add Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Addcontact
