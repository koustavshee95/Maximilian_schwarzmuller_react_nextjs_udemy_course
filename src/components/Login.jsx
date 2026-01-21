import { useRef, useState } from "react";

export const Login = () => {
  const [emailIsInValid, setEmailIsInValid] = useState(false);

  let email = useRef();
  let password = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInValid(true);
      return;
    }
    setEmailIsInValid(false)
    console.log("Sending HTTP Request....");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>

          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInValid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
};
