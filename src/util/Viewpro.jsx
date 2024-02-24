import { TableBody, TableCell, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import{Buffer} from 'buffer';
import axios from 'axios'



const Viewpro = () => {
    var[item,setItem]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4005/iview")
        .then(response=>{
            setItem(response.data)
        })
        .catch(err=>console.log(err))

    },[])
  return (
    <div>
      <TableBody>
                    {item.map((row,pos) => {

                        return (
                            <TableRow
                                key={pos}>
                                <TableCell>
                                    {row.Category}
                                </TableCell>
                                <TableCell>{row.Subcategory}</TableCell>
                                <TableCell>{row.Description}</TableCell>
                                <TableCell>{row.Price}</TableCell>
                                <TableCell>
                                    <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`}
                                    width="50" height="50" alt="Error"/>
                                </TableCell>
                                {/* <TableCell><EditIcon onClick={()=>updateValues(row)}/></TableCell> */}
                               
                            </TableRow>

                        )
                    })}
         </TableBody>
    </div>
  )
}

export default Viewpro
