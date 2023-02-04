import React from 'react'
import './update.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Button, Form } from "semantic-ui-react";
import axios from 'axios';
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

function Update() {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [place,setPlace] = useState('');
    const [designation,setDesignation] = useState('');
    const [salary,setSalary] = useState('');
    const [ID,setID] = useState(null);

    const sendDataToApi = ()=>{
        const employeeData = {
            "name":name,
            "email":email,
            "place":place,
            "designation":designation,
            "salary":salary
        }
        axios.put(`http://localhost:8082/api/v1/employee/${ID}`,employeeData)
        .then((response)=>{
            if(response.data.success===true){
                alert("Updated successfully");
                navigate('/home');
            }
            else{
                alert("Update Failed");
            }
        })
    }

    useEffect(()=>{
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPlace(localStorage.getItem("place"));
        setDesignation(localStorage.getItem("designation"));
        setSalary(localStorage.getItem("salary"));
        setID(localStorage.getItem('ID'));
    },[])
  return (
    <div>
        <Navbar/>
        <div className="container">
        <Form className="form1">
          <h2>Update Employee</h2>
          <Form.Field>
            <input fluid label="Name" placeholder="Name" name={name} onChange={(e)=>setName(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <input fluid label="email" placeholder="Email" name={email} onChange={(e)=>setEmail(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <input fluid label="Place" placeholder="Place" name={place} onChange={(e)=>setPlace(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <input fluid label="designation" placeholder="Designation" name={designation}  onChange={(e)=>setDesignation(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <input fluid label="salary" placeholder="Salary" name={salary}  onChange={(e)=>setSalary(e.target.value)} />
          </Form.Field>

          <Button type="submit" onClick={sendDataToApi}>Update</Button>
        </Form>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
      <Footer/>
    </div>
  )
}

export default Update