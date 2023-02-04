import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";


function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const userAuthentication = () => {
    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
    axios
      .post(`http://localhost:8082/api/v1/user/login`, userData)
      .then((response) => {
        console.log(response.data);

        if (response.data.status === "success") {
          let token = response.data.token;
          let userId = response.data.data[0]._id;
          let role = response.data.data[0].role;

          sessionStorage.setItem("usertoken", token);
          sessionStorage.setItem("userId", userId);
          sessionStorage.setItem("role", role);
          alert("valid user");
          navigate("/home");
        } else {
          alert("invalid user");
        }
      });
  };

  return (
    <div>
      <div>
        {" "}
        <section className="Background">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-6">
                <div className="">
                  <div className="row g-0">
                    <form className="LoginForm">
                      <div className="card-body p-md-5 text-black">
                        <div className="d-flex justify-content-center pt-3">
                          <h1 className="fw-Bolder mb-3 pb-3 heading">
                            Login
                          </h1>
                        </div>
                        <br />
                        <br />
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            onChange={(e) => setemail(e.target.value)}
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email Id"
                            required
                          />
                        </div>
                        <br />
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <br />

                        <br />
                        <div className="d-flex justify-content-center pt-3">
                          <button
                            onClick={userAuthentication}
                            type="button"
                            className="btn btn-danger btn-lg ms-2"
                          >
                            Login
                          </button>
                          <br />
                          <br />
                          
                        </div>
                        <div className="para">
                        <p>
                            Dont have an account ? Signup{" "}
                            <a href="/signup">here</a>
                          </p>
                        </div>
                      </div>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
