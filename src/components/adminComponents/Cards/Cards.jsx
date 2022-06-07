import React, { useEffect, useState } from 'react'
import './cards.scss'
import Card from '../card/card'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { fetchCars } from '../../API/Api';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const Cards = () => {
    const [loading, setLoading] = useState(true);
    const [loadingButton, setLoadingButton] = useState(false);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars({setLoading, setCars});
    }, [])

    const handleDelete = async (id) => {
        try {
          setLoadingButton(true)
          const res = await fetch(`http://localhost:5000/api/cars/${id}`, {
            method: "DELETE",
          });
          if (res.ok) {
            const updateCars = cars.filter((car) => car._id !== id);
            setCars(updateCars);
          }
          setLoadingButton(false)
        } catch (error) {
          console.log(error);
        }
      };

    return (
            <div className="cardsContainer">
                <Stack spacing={2} direction="row" sx={{ mb: '24px' }}>
                    <Button variant="outlined">All</Button>
                    <Button variant="outlined">Small</Button>
                    <Button variant="outlined">Medium</Button>
                    <Button variant="outlined">Large</Button>
                </Stack>
                <div className="list-cards">
                    {loading && (
                      <Box sx={{ width: '100%', mt: 10 }}>
                        <LinearProgress />
                      </Box>
                    )}
                    {!loading && (
                        cars.map(car => (
                            <Card car={car} key={car._id} handleDelete={handleDelete} loadingButton={loadingButton} setLoadingButton={setLoadingButton}/>
                        ))
                    )}
                </div>
                
            </div>
    )
}

export default Cards