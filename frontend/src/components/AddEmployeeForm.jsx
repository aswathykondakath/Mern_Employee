import axios from "axios";
import React from "react";
import { Button, Form } from "semantic-ui-react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./employee.css";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function AddEmployeeForm() {
  const navigate = useNavigate();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [place,setPlace] = useState('');
  const [designation,setDesignation] = useState('');
  const [salary,setSalary] = useState('');

  const sendDataToApi =()=>{
    var token = sessionStorage.getItem("usertoken");
    const employeeData = {
      "token":token,
      "name":name,
      "email":email,
      "place":place,
      "designation":designation,
      "salary":salary

    }

    axios.post(`http://localhost:5000/api/v1/employee/add`,employeeData)
    .then((response)=>{
      if(response.data.status==="success"){
        alert("Employee added successfully");
        navigate('/home');
      }
      else{
        alert("Error");
        navigate("/home")
      }
    })
  }

  return (
    <div>
       <Navbar/>
        <div className="container">
        <Form className="form1">
          <h2>Add an Employee</h2>
          <Form.Field>
            <input fluid label="Name" placeholder="Name"  onChange={(e)=>setName(e.target.value)} required />
          </Form.Field>
          <Form.Field>
            <input fluid label="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} required />
          </Form.Field>

          <Form.Field>
            <input fluid label="Place" placeholder="Place"  onChange={(e)=>setPlace(e.target.value)} required />
          </Form.Field>

          <Form.Field>
            <input fluid label="designation" placeholder="Designation"   onChange={(e)=>setDesignation(e.target.value)} required />
          </Form.Field>

          <Form.Field>
            <input fluid label="salary" placeholder="Salary"  onChange={(e)=>setSalary(e.target.value)} required />
          </Form.Field>

          <Button type="submit" onClick={sendDataToApi}>Add Employee</Button>
        </Form>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
      <Footer/>
    </div>
  );
}

export default AddEmployeeForm;
