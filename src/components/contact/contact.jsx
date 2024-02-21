import React, { useEffect } from 'react'
import { PiUsersThin } from "react-icons/pi";
import { GiLightningFrequency } from "react-icons/gi";
import { MdOutlineStarRate } from "react-icons/md";
import { TbBadge } from "react-icons/tb";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Addcontact from './addcontact';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changetoggle, deletecontact, filtercontacts, searchcontact, updatecontact, updatecontactrate } from '../../redux/slices/contactslice';
import { addcontacts } from '../../redux/slices/contactslice';

const Contact = () => {

    const [background, setbackground] = useState();
    const [updateshow, setupdateshow] = useState({
        _id: "",
        fname: "",
        lname: "",
        company: "",
        phone: "",
        email: "",
        address: "",
        rate: "",
        dipartment: "",
        notes: "",
    });
  

    const [showtoupdate, setshowtoupdate] = useState(false);
    const [filterselect, setfilterselet] = useState("all");

    const dispatch = useDispatch();
    const togglestate = useSelector((state) => state.contact.toggle)
    const contactlist = useSelector((state) => state.contact.data);
    console.log(contactlist)


    const addcantact = () => {
        dispatch(changetoggle(true));
    }
   
     const findshowcontact = (e)=>{
        setbackground(e);
        const filteredcontact = contactlist.filter((curr)=>{
             return curr._id == e;
        })
        
        setupdateshow({
            _id: filteredcontact[0]._id,
            fname: filteredcontact[0].fname,
            lname: filteredcontact[0].lname,
            company: filteredcontact[0].company,
            phone: filteredcontact[0].company,
            email: filteredcontact[0].email,
            address: filteredcontact[0].address,
            rate: filteredcontact[0].rate,
            dipartment: filteredcontact[0].dipartment,
            notes: filteredcontact[0].notes
        })
        
     }
   

     const showupdatewindow = ()=>{
        setshowtoupdate(true);
        console.log(updateshow);
     }

     const hideupdateview = ()=>{
            dispatch(updatecontact(updateshow));
           setshowtoupdate(false);
     }

    const update = (e)=>{
       
        const {name, value} = e.target;
        setupdateshow(prestate => ({
            ...prestate,
            [name]: value
        }))
        
    }
   
    const deletenote = (id)=>{
        dispatch(deletecontact(id));
         console.log(id)
    }

    const searchcontacts = (e)=>{
         dispatch(searchcontact(e.target.value));
    }


    const filtercontact = (e)=>{
        dispatch(filtercontacts(e));
        setfilterselet(e);
            console.log(e);
    }

     const updaterating = (e)=>{
         dispatch(updatecontactrate(e));
     }

    console.log(updateshow)

    useEffect(()=>{
        dispatch(addcontacts());
    },[])


    return (
        <>
            {
                togglestate == true ? <Addcontact /> :
                    <div className="contact">
                        <div className="innercontact p-4">
                            <div className="contactboxxes">
                                <div className="contactborder">
                                    <div className="contactboxxesinner d-flex">
                                        <div className="contactbox  commonwidth boxrigthborder">
                                            <div className="">
                                                <div className="boxtop text-center">
                                                    <button onClick={addcantact} className="addcontactbutton">Add Contact</button>
                                                </div>
                                                <div className="boxdata">
                                                    <h6>Filter</h6>
                                                    <div className="filters">
                                                        <div className="innerfilters">
                                                            <div className="filter">
                                                                <button style={{ background: filterselect == "all" ? "#e9ecff" : "" }} className="filterbutton" onClick={()=>filtercontact("all")}>
                                                                    <PiUsersThin /> All
                                                                </button>
                                                            </div>
                                                            <div className="filter">
                                                                <button className="filterbutton">
                                                                    <GiLightningFrequency /> Frequent
                                                                </button>
                                                            </div>
                                                            <div className="filter">
                                                                <button style={{ background: filterselect == "star" ? "#e9ecff" : "" }} className="filterbutton" onClick={()=>filtercontact("star")}>
                                                                    <MdOutlineStarRate /> Starred
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6>Filter By The Catogary</h6>
                                                    <div className="catogaryfilter">
                                                        <div className="filter">
                                                            <button style={{ background: filterselect == "engineer" ? "#e9ecff" : "" }} className="filterbutton" onClick={()=>filtercontact("engineer")}>
                                                                <TbBadge /> Engineering
                                                            </button>
                                                        </div>
                                                        <div className="filter">
                                                            <button style={{ background: filterselect == "support" ? "#e9ecff" : "" }} className="filterbutton" onClick={()=>filtercontact("support")}>
                                                                <TbBadge /> Support
                                                            </button>
                                                        </div>
                                                        <div className="filter">
                                                            <button style={{ background: filterselect == "sales" ? "#e9ecff" : "" }} className="filterbutton" onClick={()=>filtercontact("sales")}>
                                                                <TbBadge /> Sales
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contactbox  commonwidth boxrigthborder">
                                            <div className="">
                                                <div className="boxtop text-center">
                                                    <input onChange={searchcontacts} className="contactsearch" type="text" placeholder="search Contact" />
                                                </div>
                                                <div className="">
                                                    <div className="boxdatainner">
                                                        <ul>
                                                            {
                                                                contactlist.map((curr) => {
                                                                    return (
                                                                        <li style={{ margin: "0" }} className="listmain">
                                                                            <div style={{ background: background == curr._id ? "#a9bcf142": "", padding: "10px 5px" }} className="contactlist d-flex" onClick={()=>findshowcontact(curr._id)}>
                                                                                <div>
                                                                                    <img className="contactimage" src='/images/user.jpg' />
                                                                                </div>
                                                                                <div className="mx-2">
                                                                                    <h5>{curr.fname}<span className="ms-2">{curr.lname}</span></h5>
                                                                                    <span>{curr.dipartment}</span>
                                                                                </div>
                                                                               
                                                                            </div>
                                                                            <div className="ms-auto listbutton">
                                                                                    <MdOutlineStarPurple500 className="me-2 contactoneclick" onClick={()=>updaterating(curr)} style={{ color: curr.rate == "true" ? "#e9ae09" : "" }} />
                                                                                    <RiDeleteBin6Line className="contactoneclick" onClick={()=>deletenote(curr._id)}/>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="commonwidth editheight">
                                            <div className="boxtop d-flex px-2">
                                                <div>
                                                    <img className="contactimage" src='/images/user.jpg' />
                                                </div>
                                                <div className="ms-2">
                                                    <h6>Semi</h6>
                                                    <span>Support</span>
                                                </div>
                                            </div>
                                            <div className="boxdata p-4">
                                                <div className="boxdatainner">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="exacttable">Firstname : </td>
                                                                { showtoupdate == false? <td>{updateshow?updateshow.fname : ''}</td> : <td><input name='fname' onChange={update} value={updateshow.fname} type="text"/></td> }
                                                            </tr>
                                                            <tr>
                                                                <td className="exacttable">Lastname : </td>
                                                                { showtoupdate == false? <td>{updateshow.lname}</td> : <td><input name='lname' onChange={update} value={updateshow.lname}  type="text"/></td> }
                                                            </tr>
                                                            <tr>
                                                                <td className="exacttable">Company : </td>
                                                                { showtoupdate == false? <td>{updateshow.company}</td> : <td><input name='company' onChange={update} value={updateshow.company} type="text"/></td> }
                                                            </tr>
                                                            <tr>
                                                                <td className="exacttable">Department : </td>
                                                                { showtoupdate == false? <td>{updateshow.dipartment}</td> : <td><input name='dipartment' onChange={update} value={updateshow.dipartment} type="text"/></td> }
                                                            </tr>
                                                            <tr>
                                                                <td className="exacttable">Email : </td>
                                                                { showtoupdate == false? <td>{updateshow.email}</td> : <td><input name='email' onChange={update} value={updateshow.email} type="text"/></td> }
                                                            </tr>
                                                            <tr>
                                                                <td className="exacttable">Phone : </td>
                                                                { showtoupdate == false? <td>{updateshow.phone}</td> : <td><input name='phone' onChange={update} value={updateshow.phone} type="text"/></td> }
                                                            </tr>
                                                            <tr>
                                                                <td className="exacttable">Address : </td>
                                                                { showtoupdate == false? <td>{updateshow.address}</td> : <td><input name='address' onChange={update} value={updateshow.address} type="text"/></td> }
                                                            </tr>
                                                            <tr>
                                                                <td className="exacttable">Note : </td>
                                                                { showtoupdate == false? <td>{updateshow.notes}</td> : <td><input name='notes' onChange={update} value={updateshow.notes} type="text"/></td> }
                                                            </tr>
                                                            <tr>
                                                                <td className="exacttable"></td>
                                                                <td>{ showtoupdate == false ?<button onClick={showupdatewindow} className="editbutton">Edit Contact</button>: <button onClick={hideupdateview} className="editsavebutton">Save Contact</button>}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default Contact
