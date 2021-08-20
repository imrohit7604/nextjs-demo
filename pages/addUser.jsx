import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormError = ({ errorMessage }) => {
  return <p style={{ color: "red" }}>{errorMessage}</p>;
};
function AddUser() {
  const [localState, setLocaltate] = useState({
    name: "",
    nameError: false,
    email: "",
    emailError: false,
    gitHubUserName: "",
    gitHubUserNameError: false,
  });
  const handelChange = (e) => {
    setLocaltate((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    if (vaildate()) console.log(localState);
  };
  const vaildate = () => {
    let isValid = true;
    if (localState.name != null && localState.name != "")
      setLocaltate((prevState) => {
        return { ...prevState, nameError: false };
      });
    else {
      isValid = false;
      setLocaltate((prevState) => {
        return { ...prevState, nameError: true };
      });
    }

    if (localState.email != null && localState.email != "")
      setLocaltate((prevState) => {
        return { ...prevState, emailError: false };
      });
    else {
      isValid = false;
      setLocaltate((prevState) => {
        return { ...prevState, emailError: true };
      });
    }

    if (localState.gitHubUserName != null && localState.gitHubUserName != "")
      setLocaltate((prevState) => {
        return { ...prevState, gitHubUserNameError: false };
      });
    else {
      isValid = false;
      setLocaltate((prevState) => {
        return { ...prevState, gitHubUserNameError: true };
      });
    }
    return isValid;
  };
  return (
    <form className="user-form">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={localState.name}
          onChange={handelChange}
        />
        {localState.nameError && <FormError errorMessage="Name is Required" />}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={localState.email}
          onChange={handelChange}
          aria-describedby="emailHelp"
        />
        {localState.emailError && (
          <FormError errorMessage="Email is Required" />
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="gitHubUserName" className="form-label">
          GitHub User Name
        </label>
        <input
          type="text"
          className="form-control"
          id="gitHubUserName"
          value={localState.gitHubUserName}
          onChange={handelChange}
        />
        {localState.gitHubUserNameError && (
          <FormError errorMessage="GitHub User Name is Required" />
        )}
      </div>
      <button type="submit" className="btn btn-primary" onClick={handelSubmit}>
        Submit
      </button>
    </form>
  );
}

export default AddUser;
