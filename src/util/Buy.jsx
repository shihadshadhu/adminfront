import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Buy.css';
import axios from 'axios';

const Buy = () => {

 
  var[selectedimage,setSelectedimage]=useState(null);
  var[inputs,setInputs]=useState({
    

      "name":'',
      "address":'',
      "phone":'',
    })
    
const inputHandler =(event) =>{
  const{name,value}=event.target
  setInputs((inputs)=>({...inputs,[name]:value}))
  console.log(inputs)
}

  const addHandler=() =>{
    console.log("Clicked")

    console.log(inputs)
    axios.post("http://localhost:3005/unew",inputs)
    .then((response)=>{
      alert("Item Ordered Successfully")
    })
    .catch(err=>console.log(err))
    
}


  return (
    <div>
      <h2>Cash on Delivery Payment</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={inputHandler}
            required
          />
        </label>
        <br /><br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={inputs.address}
            onChange={inputHandler}
            required
          />
        </label>
        <br /><br />
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={inputs.phone}
            onChange={inputHandler}
            required
          />
        </label>
        <br /><br />
        <div className='dd'>
          {/* Link the button to the viewpro route */}
          <Link to="/viewpro">
          <Button type="submit" variant="contained" color="primary" onClick={addHandler}>
            Submit
          </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Buy;
