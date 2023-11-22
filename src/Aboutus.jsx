import React from "react";
import Header from "./Header";
import Room1 from "./img/ROOM1.jpeg"
import Room2 from "./img/ROOM2.jpeg"
import Room3 from "./img/ROOM3.jpeg"
import Room4 from "./img/ROOM4.jpeg"
import Room5 from "./img/ROOM5.jpeg"
import Room6 from "./img/ROOM6.jpeg"
import Room7 from "./img/ROOM7.jpeg"
import Footer from "./Footer";

function Aboutus(params) {
    return(
        <div>
            <Header />
<h3 className="aboutus-h3">Heirs Multi-Specialist Hospital is a state-of-the-art hospital set up by Dr and Dr (Mrs) Soje in 2015 to provide world-class healthcare services to Ekiti people.</h3>
<p className="aboutus-P">These are some of our facilities;</p>
<img src={Room1} alt=""  className="aboutus-images"/>
<img src={Room2} alt=""  className="aboutus-images"/>
<img src={Room3} alt=""  className="aboutus-images"/>
<img src={Room4} alt=""  className="aboutus-images"/>
<img src={Room5} alt=""  className="aboutus-images"/>
<img src={Room6} alt=""  className="aboutus-images"/>
<img src={Room7} alt=""  className="aboutus-images"/>

<Footer />
        </div>
    )
    
}

export default Aboutus;