import React, { useState } from 'react';

import './index.css';

import { MdEmail, MdPerson } from 'react-icons/md';



const Contact = () => {

const [result, setResult] = useState("");



const onSubmit = async (event) => {
event.preventDefault();
setResult("Sending....");
const formData = new FormData(event.target);
formData.append("access_key", "d4b5f3f7-e4cc-4c2c-9bb1-c8cd3ac598be");
const response = await fetch("https://api.web3forms.com/submit", {
method: "POST",
body: formData
});



const data = await response.json();


 if (data.success) {
 setResult("Form Submitted Successfully!");
 event.target.reset();
 } else {
 console.log("Error", data);
 setResult(data.message);

 }
 };



return (

<section id="contact" className="contact-section">

<div className="contact-container">

<p className="contact-subtitle">GET IN TOUCH</p>

<h1 className="contact-title">Contact Me</h1>

<div className="contact-content">
<div className="contact-left">
<div className="contact-info-item">
<MdEmail className="contact-icon" />
<div className="contact-info-text">
<h3>Email</h3>
<p>kasturiabbaspatel@gmail.com</p>
</div>
</div>
<div className="contact-info-item">
<MdPerson className="contact-icon" />
<div className="contact-info-text">
 <h3>Name</h3>
 <p>Abbas</p>
</div>
 </div>
 </div>
<div className="contact-right">
 <form onSubmit={onSubmit} className="contact-form">
<div className="form-group">
<label htmlFor="name">Name</label>
<input type="text" id="name" name="name" required />
</div>
<div className="form-group">
<label htmlFor="email">Email</label>
<input type="email" id="email" name="email" required />
</div>
<div className="form-group">
<label htmlFor="message">Message</label>
<textarea id="message" name="message" rows="5" required></textarea>
</div>
<button type="submit" className="submit-button">Send Message</button>
</form>
<span className="submission-status">{result}</span>
</div>
 </div>
 </div>
</section>
);

};



export default Contact; 