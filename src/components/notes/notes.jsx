import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletenote , uploadnote } from '../../redux/slices/fetchdashboard';
import { useState } from 'react';
import { updatenotes, searchnote} from "../../redux/slices/fetchdashboard";

const Notes = () => {


    useEffect(()=>{
      dispatch(uploadnote(null));
      const today = new Date();
      const yy = today.getFullYear();
      const mm = today.getMonth() + 1;
      const da = today.getDate();
      const format = da + "/" + mm + "/" + yy;
      console.log(format)
    },[])

    const noteslist = useSelector((state)=> state.note.data)
    console.log(noteslist)

    const notestatus = useSelector((state)=> state.note.status);
    const noteupdatestatus = useSelector((state) => state.note.uploadstatus)
    const dispatch = useDispatch();

    const [finaldata, setfinaldata] = useState();
    const [color, setcolor] = useState("#2623f0ee");
    const [activebutton, setactivebutton] = useState(1);
    const [notebackground, setnotebackground] = useState();
    const [notes, setnotes] = useState(noteslist);
    const [filterednote, setfilterdnote] = useState();
    const [filterdid, setfilteredid] = useState();
    const [showpop, setshowpop] = useState(false);
    console.log(filterednote)


    const handleclick = ()=>{
        dispatch(uploadnote(finaldata, color));
    }
    const applycolor = (e, active)=>{
        setactivebutton(active)
        setcolor(e);
    }


    const findshownote = (e)=>{
        setnotebackground(e);
        console.log(notes)
        const filtered = noteslist.filter((curr)=>{
            return curr._id == e 
        })
        let d = filtered[0]
        setfilterdnote(d.note);
        setfilteredid(d._id);
        console.log(filterdid)
        setshowpop(true);
        console.log(filtered)
    } 



const addnotes = (e)=>{
    setfinaldata(e.target.value);
}

const handlechange = (e)=>{
    setfilterdnote(e.target.value)
}
console.log(noteupdatestatus)

const handlesearch = (e)=>{
  dispatch(searchnote(e.target.value));

}

const handledelete = (e)=>{
    dispatch(deletenote(e))
     
}

    return (
           <>
           {
             noteupdatestatus == "SUCCESS" ? <div className="success">success</div> : ""
           }     
           {
            notestatus == "LOADING" ?
            <div className="loader"></div>
            : 
            <div className="notes p-4">
           
                <div className="innernotes row">
                   
                    <div className="leftnotes col-lg-4 p-0">
                        <div className="notesleftmain">
                            <div className="noteslefttop">
                                <input onChange={handlesearch} type="text" className="notessearch" placeholder="search"/>
                            </div>
                            <div className="notesleftbottom">
                                {
                                    noteslist.map((curr)=>{
                                         return(
                                            <>
                                                <div style={{  background: notebackground == curr._id ? "#7d98e347" :""}} className="notescard" >
                                                    <div style={{ background: curr.color }} className="cardcolor"></div>
                                                    <div className="px-2 py-4 ms-2" onClick={()=>findshownote(curr._id)}>
                                                      <p className="m-0 cardcontent">{curr.note}</p>
                                                    </div>
                                                    <div className="deletebuttonmain">
                                                        <button className="notedeletebutton" onClick={()=>handledelete(curr._id)}>Delete</button>
                                                      </div>
                                                </div>
                                            </>
                                         )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="rightnotes col-lg-8 p-0">
                        <div className="notesrighttop text-end">
                            <button disabled={!finaldata} className="addnotebutton" onClick={handleclick}>Add Note</button>
                        </div>
                        <div className="notesrightbottom">
                            <h5 className="noteheading">Edit Note</h5>
                            <textarea onChange={addnotes} rows={5}></textarea>
                        </div>
                        <div className="notesrightcolorselection">
                            <h6>Change color</h6>
                            <div className="colormain">
                                <button style={{ boxShadow: activebutton == 1 ? "0px 0px 0px 4px #c9d3ef" : ""}} className="btn btn-sm b1 mx-1 colorbutton" onClick={()=>applycolor("#2623f0ee", 1)}></button>
                                <button style={{ boxShadow: activebutton == 2 ? "0px 0px 0px 4px #c9d3ef" : ""}} className="btn btn-sm b2 mx-1 colorbutton" onClick={()=>applycolor("#4fe176f8", 2)}></button>
                                <button style={{ boxShadow: activebutton == 3 ? "0px 0px 0px 4px #c9d3ef" : ""}} className="btn btn-sm b3 mx-1 colorbutton" onClick={()=>applycolor("#ff2020f8", 3)}></button>
                                <button style={{ boxShadow: activebutton == 4 ? "0px 0px 0px 4px #c9d3ef" : ""}} className="btn btn-sm b4 mx-1 colorbutton" onClick={()=>applycolor("#f183b6", 4)}></button>
                                <button style={{ boxShadow: activebutton == 5 ? "0px 0px 0px 4px #c9d3ef" : ""}} className="btn btn-sm b5 mx-1 colorbutton" onClick={()=>applycolor("#ff6a00a6", 5)}></button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    showpop == true ?
                <div className="updatenote">
                    <div className="d-flex justify-content-between">
                        <h5>Edit note</h5>
                        <button className="popcut" onClick={()=>{setshowpop(false)}}>+</button>
                    </div>
                    <div className="updatebox">
                        <textarea rows={5} className="updateinput" value={filterednote} onChange={handlechange}></textarea>
                        <button onClick={()=>{ dispatch(updatenotes(filterdid, filterednote)) }} className="btn btn-success my-2">Update note</button>
                    </div>
                </div>
                : ""
                }
                
        </div>

           }       
            
        </>
    )
}

export default Notes;