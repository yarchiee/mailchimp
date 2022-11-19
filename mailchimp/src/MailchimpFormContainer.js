import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpFormContainer = (props) => {
  const postUrl = `https://gmail.us11.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [inputText, setInputText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Join our email list for future updates.</h3>
      <div>
        <InputField
          label="Email"
          onChangeHandler={setEmail}
          type="email"
          value={email}
          placeholder="your@email.com"
          isRequired
          inputText={inputText}
          setInputText={setInputText}
        />
      </div>
      <InputField
        label="subscribe"
        type="submit"
        formValues={[email]}
        inputText={inputText}
        setInputText={setInputText}
      />
    </form>
  );
};
