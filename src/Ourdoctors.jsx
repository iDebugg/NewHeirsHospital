import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DrSojeImg from "./img/Dr Soje.png"
import DrMrsSojeImg from "./img/Dr Mrs Soje.png"
import './App.css';

function Ourdoctors() {
    return (
        <div>
            <Header />
            <div>
                <div className="Dr-Soje-container">
                    <img src={DrSojeImg} alt="" />
                    <p>Dr Michael O. Soje, Co-founder and Medical Director of Heirs Multi-Specialist Hospital, is a thoroughbred and multi-skilled medical doctor. He is a consultant nephrologist and cardiovascular disease expert.</p>
                    <p>He is a seasoned teacher and trainer in the field of nephrology and cardiovascular disease management.</p>
                    <p>He is a seasoned teacher and trainer in the field of nephrology and cardiovascular disease management.
                        He has practised as a specialist and lecturer across some prestigious federal teaching hospitals, state specialist hospitals and private specialist facilities across the southwest over the last 10 years.</p>

                </div>
                <div className="Dr-Soje-container">
                    <img src={DrMrsSojeImg} alt="" />
                    <p>Dr (Mrs) Oluwayemisi Anthonia Soje, a multi-skilled and multi-tasking medical doctor, is Co-founder and the CEO/Chief Medical Director of Heirs Multi-Specialist Hospital</p>
                    <p>Co-founder, Foster Heirs Counseling and Psychotherapy Services,</p>
                    <p>Trauma and Addiction Recovery Therapist as well as Max-Dental Clinic, Oye-Ekiti</p>
                </div>
            </div>


            <Footer />

        </div>
    )
}

export default Ourdoctors