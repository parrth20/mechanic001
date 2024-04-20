import React from 'react'
import '../css/mechanic.css';
 //import img1 from '../images/Autonix.png'
 import img from '../images/img.png'
 import img2 from '../images/img2.png'
 import img3 from '../images/img3.png'
 import img4 from '../images/img4.png'
 //import img5 from '../images/img5.png'
 import img6 from '../images/img6.png'
 //import img7 from '../images/img7.png'
 import img8 from '../images/img8.png'
 import img9 from '../images/img9.png'
 import img10 from '../images/insta-logo.png'
 import img11 from '../images/twitter2-logo.webp'
 import img12 from '../images/youtube-logo.png'
 import img13 from '../images/facebook-logo.png'
 import { useNavigate } from 'react-router-dom';



const Mechanic = () => {
    const navigate = useNavigate();

    function handleClick() {
        // Display the first alert
        alert('PLEASE WAIT UNTIL YOUR BOOKING IN PROCESS');

        // Set a delay of 5 seconds (5000 milliseconds) before showing the next alert
        setTimeout(function() {
            alert('YOUR VEHICLE SERVICING SLOT IS SUCCESSFULLY BOOKED');
        }, 3000);navigate("/form");
    }
  return (
    <div>
      <div class="wrapper">
        <div id="sidenav">
          <div style={{ "width": "100%", "display": "flex", "justifyContent": "space-between" }}>
            <div style={{ "position": "relative", "width": "100%", "padding": "10px", "fontSize": "20px" }}>MENU</div>
            <div id="cross" style={{ "position": "relative", "width": "100%", "textAlign": "right", "padding": "10px", "transition": "0.5s" }} onclick="closeSesame()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
            <br />
          </div>
          <br />
          <div class="menucont" style={{ "padding": "30px" }}>
            <a href="../index.html">Home</a><br />
            <a href="../index.html">Services</a><br />
            <a href="../contact us/index.html">Contact Us</a><br />
            <a href="../about us/index.html" >About Us</a><br />
            <a href="../other1/customerSupport.html" >Customer Support</a><br />
            <a href="../Tnc/TERMS_CONDITIONS.HTML" >Terms and Conditions</a><br />
            <a href="../other1/return&refund.html">Return and Refund Policy</a>
          </div>
        </div>
        <header id="head" style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "zIndex": "1" }}>
          <div id="menu" onclick="openSesame()" style={{ "transition": "0.5s" }}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 15 15">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </span>
            <span> MENU</span>
          </div>
          <div id="autonix-logo">AUTONIX</div>
          <div style={{ "display": "flex", "justifyContent": "space-evenly" }}>
            <span class="search" onclick="search()" style={{ "paddingRight": "10px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <span class="cart" style={{ "paddingLeft": "10px", "paddingRight": "10px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </span>
            <span class="contact" style={{ "paddingLeft": "10px" }}>
              <a href=""><button style={{ "padding": "5px", "backgroundColor": "yellowgreen", "border": "1px solid black", "borderRadius": "5px" }} id="signInBtnHeader">Sign In</button></a>
            </span>
          </div>
        </header>
        <h1 class="head"> MECHANICS </h1>
        <div class="cols">
          <div class="col">
            <div class="container">
            <div class="front" style={{ backgroundImage: `url(${img})` }}>
                <div class="inner">
                  <p> Auto Repair  </p>
                  <span>Mr.Randeep Kumar</span>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p class="para10">Name:Randeep Kumar <br />Experience: 5years <br /> charges: For Full Maintanice - ₹1500 (base price) <br />rest according to condition of vehical
                  </p>
                  <br />
                  <br />
                  <button id="alert1" class="button1"
                  onClick = {handleClick}> Book Now </button>

                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="container">
            <div class="front" style={{ backgroundImage: `url(${img6})` }}>
                <div class="inner">
                  <p>Car Repair </p>
                  <span>Mr. Bhupender Jogi</span>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p class="para10">Name:Mr. Bhupendra Jogi<br />Experience: 10years <br /> charges: For Full Maintanice - ₹2500 (base price) <br />rest according to condition of vehical
                  </p>
                  <br />
                  <br />
                  <button id="alert1" class="button1"
                  onClick = {handleClick}> Book Now </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="container">
            <div class="front" style={{ backgroundImage: `url(${img8})` }}>
                <div class="inner">
                  <p> Car Repair</p>
                  <span>Mr. Raju </span>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p class="para10">Name:Mr. Raju<br />Experience: 8years <br /> charges: For Full Maintanice - ₹1800 (base price) <br />rest according to condition of vehical
                  </p>
                  <br />
                  <br />
                  <button id="alert1" class="button1"
                  onClick = {handleClick}> Book Now </button>                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="container">
            <div class="front" style={{ backgroundImage: `url(${img4})` }}>
                <div class="inner">
                  <p>Truck Repair</p>
                  <span>Mr.Suraj & Mr.Mayank</span>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p class="para10">Name:Mr.Suraj & Mr.Mayank<br />Experience: 12years <br /> charges: For Full Maintanice - ₹4000 (base price) <br />Rest According to Condition of Vehical
                  </p>
                  <br />
                  <button id="alert1" class="button1"
                  onClick = {handleClick}> Book Now </button>                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="container">
            <div class="front" style={{ backgroundImage: `url(${img9})` }}>
                <div class="inner">
                  <p>Auto Repair</p>
                  <span>Mr. Abhay</span>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p class="para10">Name:Mr.Abhay<br />Experience: 2years <br /> charges: For Full Maintanice - ₹800 (base price) <br />Rest According to Condition of Vehical
                  </p>
                  <br />
                  <br />
                  <button id="alert1" class="button1"
                  onClick = {handleClick}> Book Now </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="container">
            <div class="front" style={{ backgroundImage: `url(${img2})` }}>
                <div class="inner">
                  <p>Truck Repair</p>
                  <span>Mr. Chintu & Golu</span>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p class="para10">Name:Mr.Chintu & Mr.Golu<br />Experience: 9years <br /> charges: For Full Maintanice - ₹3800 (base price) <br />Rest According to Condition of Vehical
                  </p>
                  <br />
                  <br />
                  <button id="alert1" class="button1"
                  onClick = {handleClick}> Book Now </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="container">
            <div class="front" style={{ backgroundImage: `url(${img3})` }}>
                <div class="inner">
                  <p>Bike Repair</p>
                  <span>Mr.ShyamLal</span>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p class="para10">Name:Mr.ShyamLal<br />Experience: 7years <br /> charges: For Full Maintanice - ₹700 (base price) <br />Rest According to Condition of Vehical
                  </p>
                  <br />
                  <br />
                  <button id="alert1" class="button1"
                  onClick = {handleClick}> Book Now </button>                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="others">
            <p>
              <h2 style={{ "color": "whitesmoke" }}>Connect with Us:</h2>
            </p>
            <br />
            <br />
            <div class="icons">

              <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
                <img class="footer-img" src={img10} alt="Instagram" width="30" />
              </a>
              <a href="https://www.twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
                <img class="footer-img" src={img11} alt="Twitter" width="30" />
              </a>
              <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer">
                <img class="footer-img"
                  src={img12}
                  alt="Facebook" width="30" />
              </a>
              <a href="https://www.youtube.com/your_facebook" target="_blank" rel="noopener noreferrer">
                <img class="footer-img" src={img13} alt="Youtube" width="30" />
              </a>
            </div>
            <br />
            <br />
            <div class="address">
              <p style={{ "color": "whitesmoke" }}> our website and explore the latest in automobile parts technology.</p>
            </div>
          </div>
          <div class="footer1">
            <p class="footpara" style={{ "color": "whitesmoke" }}>Copyright &copy; Autonix ltd. All Rights Reserved | Gmail: autonix@gmail.com</p>
            <br />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Mechanic;
