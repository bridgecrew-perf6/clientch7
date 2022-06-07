import "./carstable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import axios from 'axios'

const CarsTable = () => {
  const [cars, setCars] = useState([]);
  
  const fetchCars = async ()=> {
    try {
        const response = await axios.get('https://backendch7.herokuapp.com/api/cars');
        setCars(response.data)
    }catch(error) {
        console.log(error.message);
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])
  

  return (
     <TableContainer component={Paper} className='table'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='tableCell' >Tracking ID</TableCell>
              <TableCell className='tableCell' >Name</TableCell>
              <TableCell className='tableCell' >Category</TableCell>
              <TableCell className='tableCell' >Price</TableCell>
              <TableCell className='tableCell' >Passenger</TableCell>
              <TableCell className='tableCell' >Start Rent</TableCell>
              <TableCell className='tableCell' >Finish Rent</TableCell>
              <TableCell className='tableCell' >Created At</TableCell>
              <TableCell className='tableCell' >Updated At</TableCell>
              {/* <TableCell className='tableCell' >Status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car) => (
              <TableRow
                key={car._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className='tableCell' component="th" scope="row">
                  {car._id}
                </TableCell>
                <TableCell className='tableCell' >
                  <div className="callWrapper">
                    <img className='image' src={car.image} alt="" />
                    {car.name}
                  </div>
                </TableCell>
                <TableCell className='tableCell' >{car.category}</TableCell>
                <TableCell className='tableCell' >{car.price}</TableCell>
                <TableCell className='tableCell' >{car.passenger}</TableCell>
                <TableCell className='tableCell' >{car.startRent}</TableCell>
                <TableCell className='tableCell' >{car.finishRent}</TableCell>
                <TableCell className='tableCell' >{car.createdAt}</TableCell>
                <TableCell className='tableCell' >{car.updatedAt}</TableCell>
                {/* <TableCell className='tableCell' >{car.createdAt}</TableCell> */}
                {/* <TableCell className='tableCell' >
                  <div className={`status ${row.status}`}>{row.status}</div>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
  );
};

export default CarsTable;
