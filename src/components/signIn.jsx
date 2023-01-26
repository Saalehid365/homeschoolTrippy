import React, { useRef } from "react";
import { FaEnvelope, FaRegUser, FaUnlock } from "react-icons/fa";
import "./signIn.css";

export const SignIn = () => {
  const email = useRef();
  const password = useRef();
  const handlesubmit = () => {};
  if (
    email.current.value == "khadeejahsaaleh@gmail.com" &&
    password.current.value == "Saaleh2711"
  ) {
    localStorage.setItem("emailData", "khadeejahsaaleh@gmail.com");
    localStorage.setItem("passwordData", "Saaleh2711");
  }
  return (
    <div className="signIn-container">
      <div className="signIn-inner">
        <form className="form" onSubmit={handlesubmit}>
          <div>
            <FaRegUser />
          </div>
          <div>
            <p>Login Page</p>
          </div>
          <div>
            <FaEnvelope />
            <input
              type="email"
              placeholder="email name"
              className="user"
              ref={email}
            ></input>
          </div>
          <div>
            <FaUnlock />
            <input
              type="text"
              placeholder="password"
              className="user"
              ref={password}
            ></input>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
