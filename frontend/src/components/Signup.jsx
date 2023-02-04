import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import './signup.css'

function SignUp() {
  const navigate = useNavigate();
  const [userName,setUserName] = useState("")
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const sendDataToApi=()=>{
    const userData = {
      "userName":userName,
      "email":email,
      "password":password
    }
    axios.post(`http://localhost:8082/api/v1/user/register`,userData)
    .then((response)=>{
      if(response.data.success===true){
        alert("SignUp Successfull Please login");
        navigate("/")
      }
    })
  }

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
                            SignUp
                          </h1>
                        </div>
                        <br />
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Your Name"
                            required
                          />
                        </div>
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
                            onClick={sendDataToApi}
                            type="button"
                            className="btn btn-danger btn-lg ms-2"
                          >
                            SignUp
                          </button>
                          <br />
                          <br />
                          
                        </div>
                        <div className="para">
                        <p>
                            Already have an account ? Login{" "}
                            <a href="/">here</a>
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

export default SignUp;
