import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import EditIcon from '@mui/icons-material/Edit';

import './Orderdetails.css'
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';

const Orderdetails = () => {
  var [Order,setOrder] = useState([]);

  

  useEffect(() => {
    axios.get("http://localhost:4005/Orview")
      .then(response => {
        setOrder(response.data)
        
      })
      .catch(err => console.log(err))
  }, []);
 

    <div className='bb'>
      <Topbar/>
      <Sidebar/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableBody>Phone</TableBody>
            </TableRow>
          </TableHead>
          <TableBody>
            {Order.map((row, pos) => {

              return (
                <TableRow
                  key={pos}>
                  <TableCell>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  

                </TableRow>

              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

}

export default Orderdetails
