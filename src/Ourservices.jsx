import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';

function Ourservices() {
    return (
        <div>
            <Header />
            
            <div className="Ourservices-lists" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <p className="Ourservices-Paragraph" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">We offer our clients a very world class services;</p>
                <ul>
                    <li>Treatment of Kidney Disease</li>
                    <li> Professional Counselling Services</li>
                    <li>Laboratory Services with Blood Bank Facilities</li>
                    <li>Cancer Treatment (Prostate, Breast, Intestinal)</li>
                    <li> Heart and Cardiovascular Disease Treatment</li>
                    <li>Computerised Tomography Scan (CT Scan)</li>
                    <li>Radiology (Digital X-ray and Ultrasound)</li>
                    <li>Cardiopulmonary Lab</li>
                    <li>Obstetric and Gyneacological Services</li>
                    <li>Dialysis Service with Peritoneal Option</li>
                    <li>Intensive and Critical Care Services</li>
                    <li>Trauma and Addiction Recovery Therapy</li>
                    <li>Orthopeadic Surgery </li>
                    <li>General and Specialised Surgery</li>

                </ul>
            </div>
            <Footer />
        </div>
    )
}
export default Ourservices;