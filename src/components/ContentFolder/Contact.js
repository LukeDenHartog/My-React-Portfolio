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
    console.log(eventObject)
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

  const onSubmitForm = (eventObject) => {
    eventObject.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");

    alert(`WARNING! Your message was not be sent. This app does not have any functionality yet.`);
  };

  return (
    <section id="contact">
      <h2>Contact me</h2>
      <div>
        <form>
          <div className="form-group">
            <input
              value={name}
              name="name"
              //onblur fires when a field loses focus, while onchange fires when that field's value changes.
              onChange={onInputChange}
              onBlur={onBlurChange}
              type="name"
              className=""
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
              className="form-control"
              placeholder="Username@yahoo.com"
            />
          </div>
          <div className="form-group">
            <textarea
              value={message}
              name="message"
              onChange={onInputChange}
              onBlur={onBlurChange}
              className=""
              placeholder="Type your message here!"
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="button" onClick={onSubmitForm}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}