import React, { useState } from "react";
import emailjs from "emailjs-com";
import TrackVisibility from "react-on-screen";
import "./Contact.css";
import { Panda } from '../../components/Panda/Panda';

function Contact() {
	const [message, setMessage] = useState({
		name: "",
		email: "",
		msg: "",
  });
  const [panda, showPanda] = useState(false)

	let resetForm = () => {
		setMessage({
			name: "",
			email: "",
			msg: "",
		});
	};

	let handleChange = (evt) => {
		setMessage({
			...message,
			[evt.target.name]: [evt.target.value],
		});
	};

	let handleSubmit = (evt) => {
		evt.preventDefault();
		let templateParams = {
			user_name: message.name,
			user_email: message.email,
			to_name: process.env.REACT_APP_EMAILJS_RECEIVER,
			message_html:
				message.msg + `   From: ${message.name}     Email: ${message.email}`,
		};
		emailjs.send(
			"gmail",
			process.env.REACT_APP_EMAILJS_TEMPLATEID,
			templateParams,
			process.env.REACT_APP_EMAILJS_USERID
		);
		resetForm();
	};

  const handleShow = isVisible => {
    console.log('k', isVisible)
    setTimeout(() => {
      showPanda(isVisible)
    }, 1500)
  }

	return (
    <div className="contact" id="contact">
      {" "}
      {console.log(panda)}
      <TrackVisibility>
        <Panda className="panda" />
      </TrackVisibility>
      <form className="contact__form" onSubmit={handleSubmit}>
        <h2 className="contact__form--title">Let's chat!</h2>
        <p className="contact__form--text">
          Fill out below and I'll do my best to get back to you as soon as I
          can! &nbsp;&nbsp;&nbsp;
          <i className="far fa-smile-wink"></i>
        </p>
        <div className="contact__form--form">
          <label className="contact__label--name" htmlFor="name">
            Name:
          </label>
          <input
            className="contact__input--name"
            name="name"
            id="name"
            type="text"
            value={message.name}
            onChange={handleChange}
          ></input>
          <label className="contact__label--email" htmlFor="email">
            Email:
          </label>
          <input
            className="contact__input--email"
            name="email"
            id="email"
            type="email"
            value={message.email}
            onChange={handleChange}
          ></input>
          <label className="contact__label--msg" htmlFor="msg">
            Message
          </label>
          <textarea
            className="contact__input--msg"
            name="msg"
            id="msg"
            rows="10"
            cols="50"
            value={message.msg}
            onChange={handleChange}
          ></textarea>
        </div>
        <input
          type="submit"
          className="contact__form--submit"
          value="Send"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}

export default Contact;
