import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Subcategory.css'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'

const Subcategory = () => {
  
    
    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:4005/categoryview")
      .then(response=>{
        console.log(response.data)
        setCa(response.data)

      })
      .catch(err=>console.log(err))
    },[])

    var[inputs,setInputs]=useState({
      "Sname":'',
      "Category":''
    })
  
    const inputHandler =(event) =>{
      const{name,value}=event.target
      setInputs((inputs)=>({...inputs,[name]:value}))
      console.log(inputs)
    }
  
      const addHandler=() =>{
        console.log("Clicked")
  
        console.log(inputs)
        axios.post("http://localhost:4005/cnew",inputs)
        .then((response)=>{
          alert("Record Saved")
        })
        .catch(err=>console.log(err))
        
    }
  
  return (
    <div className='tt'>
      <Topbar/>
      <Sidebar/>
      <h2>Subcategory</h2>
    <TextField label="Subcategory Name" name="Sname" variant="filled" value={inputs.Sname}onChange={inputHandler}/><br /><br />
    
    <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
   labelId="demo-simple-select-label"
    name='Category'value={inputs.Category} onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.Cname} >{value.Cname}</MenuItem>
        )
      })
    }
  </Select>
</FormControl><br/><br/>
    <Button variant="contained" onClick={addHandler} >Submit</Button>
    </div>
  )
}

export default Subcategory