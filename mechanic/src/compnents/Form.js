import React, { useEffect, useState, useRef } from 'react';
import '../css/form.css';
import img24 from '../images/AUTONIX_icons/Automotive.png';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

export default function Customer() {

  const containerRef = useRef(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [Customer, setCoustmer] = useState([]);

  const handleClick=(e)=>{
    e.preventDefault()
    const coustmer={firstName, lastName, timeSlot}
    console.log(coustmer)
    fetch("http://localhost:8080/coustmer/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(coustmer)
    }).then(()=>{
      console.log("New Coustmer added")
    })
  }
  
  useEffect(() => {
    fetch("http://localhost:8080/coustmer/getAll")
        .then(res => res.json())
        .then((result) => {
            setCoustmer(result);
        }
        )
}, [])

  return (
    <div>
      <div id="sidenav">
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <div style={{ position: "relative", width: "100%", padding: "10px", fontSize: "20px" }}>MENU</div>
          <div id="cross" style={{ position: "relative", width: "100%", textAlign: "right", padding: "10px", transition: "0.5s" }} onClick={() => {}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </div>
          <br/>
        </div>
        <br/>
        <div className="menucont" style={{ padding: "30px" }}>
          <a href="../index.html">Home</a><br/>
          <a href="../other1/customerSupport.html">Customer Support</a><br/>
          <a href="../Tnc/TERMS_CONDITIONS.HTML">Terms and Conditions</a><br/>
          <a href="../other1/return&refund.html">Return and Refund Policy</a>
        </div>
      </div>

      <header id="head" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", zIndex: 1 }}>
        <div id="menu" onClick={() => {}} style={{ transition: "0.5s" }}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 15 15">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </span>
          <span> MENU</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <span className="search" onClick={() => {}} style={{ paddingRight: "10px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </span>
          <span className="cart" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
          </span>
          <span className="contact" style={{ paddingLeft: "10px" }}>+ CONTACT US</span>
        </div>
      </header>

      <div id="search">
        <div className="over">
          <div className="logo">
            <img src={img24} alt="" style={{ zIndex: 0 }} />
            <div className="name" style={{ fontFamily: "'RS'", color: "#fff", fontSize: "65px" }}>Autonix</div>
          </div>
          <div className="form">
            <form>
              <fieldset name="form" style={{ color: "#fff" }}>
                <p style={{ fontSize: "30px", fontWeight: 400 }}>BOOK A SLOT</p>
                <br/>
                <input id="e" type="text"  placeholder="FIRSTNAME" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <br/>
                <input id="pass" type="text"  placeholder="LASTNAME" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <br/><br/>
                <p style={{ marginRight: "200px", fontSize: "15px" }}>--Choose A Time Slot--</p>
                <FormControl component="fieldset" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                  <RadioGroup aria-label="gender" name="gender1" >
                    <FormControlLabel value="10:00 AM to 01:00 PM" control={<Radio />} label="10:00 AM to 01:00 PM " />
                    <FormControlLabel value="01:00 PM to 04:00 PM" control={<Radio />} label="01:00 PM to 04:00 PM" />
                    <FormControlLabel value="04:00 PM to 07:00 PM" control={<Radio />} label="04:00 PM to 07:00 PM"  />
                  </RadioGroup>
                </FormControl>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <button style={{ fontSize: "20px", fontWeight: "lighter", backgroundColor: "#9ECA2E", width: "100%", padding: "20px" }} onClick={(e) => { handleClick(e); }}>CONFIRM BOOKING</button>
                <br/><br/>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 