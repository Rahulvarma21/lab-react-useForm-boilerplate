import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const [validSuccess, setState] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handlerSubmit = (data) => {
    console.log("submitted", data);
    console.log("form errors", errors);
    setState(true);
  };
  return (
    <div>
      <div className="container">
        <div className="child-container">
          <div>
            {validSuccess == true ? (
              <div className="banner">
                <p>Registration Successfull</p>
              </div>
            ) : (
              " "
            )}
          </div>
          <form onSubmit={handleSubmit(handlerSubmit)}>
            <div>
              <div>
                <label htmlFor="firstName"></label>
              </div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Do not keep input feild empty",
                  },
                })}
              />
              <p className="errorMessage">
                {errors.firstName ? errors.firstName.message : null}
              </p>
            </div>
            <div>
              <div className="label">
                <label htmlFor="lastName"></label>
              </div>
              <input
                name="lastName"
                type="text"
                id="lastName"
                placeholder="Last Name"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Do not keep input feild empty",
                  },
                })}
              />
              <p className="errorMessage">
                {errors.lastName ? errors.lastName.message : null}
              </p>
            </div>
            <div>
              <div className="label">
                <label htmlFor="email"></label>
              </div>
              <input
                name="email"
                type="email"
                id="email"
                placeholder=".com"
                {...register("email", {
                  required: "Do not keep input field empty",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                  },
                })}
              />
              <p className="errorMessage">
                {errors.email ? errors.email.message : null}
              </p>
            </div>
            <div>
              <div className="label">
                <label htmlFor="password"></label>
              </div>
              <input
                name="password"
                type="password"
                id="password"
                placeholder="password"
                {...register("password", {
                  required: "Do not keep input field empty",
                  minLength: {
                    value: 4,
                    message: "Password must be more than 4 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password cannot be more than 20 characters",
                  },
                })}
              />
            </div>
            <div>
              <p className="errorMessage">
                {errors.password ? errors.password.message : null}
              </p>
            </div>
            <div>
              <input type="submit" value={"Register"} className="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
