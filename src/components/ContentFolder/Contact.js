import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const onBlurChange = (eventObject) => {
    const { target } = eventObject;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name" && !inputValue) {
      setErrorMessage("Name field is required!");
    } else if (inputType === "email" && !inputValue) {
      setErrorMessage("Email field is required!");
    } else if (inputType === "message" && !inputValue) {
      setErrorMessage("Message field is required!");
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");

    alert(
      "WARNING! Your message was not be sent. This app does not have any functionality yet."
    );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact me</h2>
      <div>
        <form className="contact-form">
          <div className="form-group">
            <input
              value={name}
              name="name"
              onChange={onInputChange}
              onBlur={onBlurChange}
              type="text"
              className="input-field"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <input
              value={email}
              name="email"
              onChange={onInputChange}
              onBlur={onBlurChange}
              type="email"
              className="input-field"
              placeholder="Username@yahoo.com"
            />
          </div>
          <div className="form-group">
            <textarea
              value={message}
              name="message"
              onChange={onInputChange}
              onBlur={onBlurChange}
              className="textarea-field"
              placeholder="Type your message here!"
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="button" className="submit-button" onClick={onSubmitForm}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
