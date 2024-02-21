import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Leftmenu from './components/leftmenu';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { useState } from 'react';
import Analytical from './components/dashboard/analytical';
import Modern from './components/dashboard/modern';
import Notes from './components/notes/notes';
import  Calendar from "./components/calender/calender"
import Contact from './components/contact/contact';
import Casl from './components/casl/casl';
import Shop from './components/shop/shop';
import Ticket from './components/ticket/ticket';

let exportappfunction = ()=>{

}


function App() {

  const [width, setwidth] = useState(true);

   exportappfunction = ()=>{
      setwidth(!width);
      console.log(width)
   }


  return (
    <>
      <BrowserRouter>
        <div className="mainwrapper">
          <div className="innermainwrapper">
            <div className="container-fluid p-0">
              <Header />
              <div className="d-flex maincontent">
                <Leftmenu />
                <div className={width == true ? "rightcontentwidth" : "rightcontentwidthincrease"}>
                  <Routes>
                    <Route path="/" element={<Analytical/>}/>
                    <Route path="/Modern" element={<Modern/>} />
                    <Route path="/notes" element={<Notes/>} />
                    <Route path="/Calendar" element={<Calendar/>} />
                    <Route path="/Contacts" element={<Contact/>} />
                    <Route path="/casl" element={<Casl/>} />
                    <Route path="/shop" element={<Shop/>} />
                    <Route path="/ticket" element={<Ticket/>} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}


export default App;
export {exportappfunction}