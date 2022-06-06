import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { 
    PeopleOutline, 
    SettingsOutlined, 
    CalendarTodayOutlined 
} from '@material-ui/icons';
import { 
    makeStyles, 
    Button, 
    CardActionArea,
    Card, 
    CardContent, 
    CardActions, 
    CardMedia, 
    Typography, 
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateButton } from '../redux/buttonSlice';

const useStyles = makeStyles(() => ({
    detailCard: {
        background: 'white',
        padding: '100px 0',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    }
}))

export default function DetailCard() {
 
    const dispatch = useDispatch();
    const {id} = useParams();

    const textButton = useSelector((state) => state.button.textButton);
    const [car, setCar] = useState({})

    dispatch(updateButton('Lanjutkan Pembayaran'))

    const fetchcarByID = async ()=> {
        try {
            console.log(id)
            const response = await axios.get(`https://backendch7.herokuapp.com/api/cars/${id}`);
            setCar(response.data)
        }catch(error) {
            console.log(error.message);
        }
    }

        useEffect(() => {
            fetchcarByID()
    }, [dispatch])


    const classes = useStyles()
  return (
      <>
      <div className={classes.detailCard}>
        <div  style={{ width: '80%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '20px'}} > 
            <Card style={{ width: '60%', marginBottom: '10px' }}>
                <CardActionArea>
                    <CardContent>
                    <Typography variant="p" component="div" style={{ fontWeight: 'bold', paddingBottom: '8px' }}>
                        Tentang Paket
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '8px' }}>
                    Include
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '8px' }}>
                    <ul>
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                    </ul>
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '8px' }}>
                    Exclude
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '8px' }}>
                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                    
                    </Typography>
                    <Typography variant="p" component="div" style={{ fontWeight: 'bold', paddingBottom: '8px' }}>
                    Refund, Reschedule, Overtime
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '8px' }}>
                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    </ul>
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
            </Card> 
             
            <Card style={{ width: '32%', marginBottom: '10px' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                image={car.image}
                alt="green iguana"
                style={{ padding: '10px' }}
                />
                <CardContent>
                <Typography variant="h6" component="div" style={{ paddingBottom: '8px' }}>
                {car.name}
                </Typography>
                <Typography variant="p" component="div" style={{ fontWeight: 'bold', paddingBottom: '8px' }}>
                Rp. {car.price} / hari
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: '8px' }}>
                {car.description}
                </Typography>
                <Typography variant="body2" color="text.secondary"style={{ display: 'flex', alignItems: 'center' }} >
                    <PeopleOutline /> {car.passenger}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ display: 'flex', alignItems: 'center' }}>
                <SettingsOutlined /> {car.category}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarTodayOutlined /> {car.createdAt}
                </Typography>
                
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" style={{ background: "#5CB85F" }} fullWidth>{textButton}</Button>
            </CardActions>
        </Card> 
            
        </div> 
        <Button variant="contained" style={{ background: "#5CB85F" }}>{textButton}</Button>
    </div>
      </>
    
  )
}
