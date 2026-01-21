import { Input } from "./Input";

import {
  isEmail,
  isNotEmpty,
  hasMinLength,
} from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function StateLogin() {

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError:emailHasError
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlepasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 8));

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
    
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>
      <div className="control no-margin">
        <div className="control-row">
          <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            placeholder="abc@example.com"
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
            value={emailValue}
            error={emailHasError && "Please enter a valid email!"}
          />

          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            placeholder="Abc@123$TU"
            onBlur={handlepasswordBlur}
            onChange={handlePasswordChange}
            value={passwordValue}
            error={passwordHasError && "It should me minimum 8 digit length"}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

//Button default behaviour is submit, so that when I chicked on button login its autometically submitted to prevent this we can used type = button because default is submit.

//another way is we can used onSubmit={handleFormSubmit} here we will get a event, and this event we can used event.preventDefault inside handller function.It prevent the default browser behaviour which would be to send and generate the http request.
