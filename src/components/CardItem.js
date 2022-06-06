import React, { useEffect } from 'react';
import { 
  PeopleOutline, 
  SettingsOutlined, 
  CalendarTodayOutlined 
} from '@material-ui/icons';
import { 
  Button, 
  CardActionArea,
  Card, CardContent, 
  CardActions, 
  CardMedia, 
  Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { updateButton } from '../redux/buttonSlice';
import { useNavigate } from 'react-router-dom'

export default function CardItem({cars}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const textButton = useSelector((state) => state.button.textButton);

  useEffect(()=> {
    dispatch(updateButton('Pilih Mobil'))
  })

   return (
    <>
    {cars && cars.length > 0 &&
    cars.map(function(item) {
      return (
        <Card style={{ width: '30%', margin: '10px', height:'550px' }} key={item.id} >
            <CardActionArea>
                <CardMedia
                component="img"
                image={item.image}
                alt="green iguana"
                style={{ padding: '20px'}}
                />
                <CardContent>
                <Typography variant="h6" component="div" style={{ paddingBottom: '8px' }}>
                {item.name}
                </Typography>
                <Typography variant="body2" component="div" style={{ fontWeight: 'bold', paddingBottom: '8px' }}>
                Rp. {item.price.toLocaleString("id-ID")} / hari
                </Typography>
                <Typography variant="body2" style={{ paddingBottom: '8px' }}>
                {item.description} 
                </Typography>
                <Typography variant="body2" style={{ display: 'flex', alignItems: 'center' }} >
                    <PeopleOutline /> {item.passenger}
                </Typography>
                <Typography variant="body2" style={{ display: 'flex', alignItems: 'center' }}>
                <SettingsOutlined /> {item.category}
                </Typography>
                <Typography variant="body2" style={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarTodayOutlined /> {item.createdAt}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button onClick={(handleButton) => handleButton(navigate(`/cars/${item._id}`))} variant="contained" style={{ background: "#5CB85F" }} fullWidth>{textButton}</Button>
            </CardActions>
        </Card>
      ) 
    })
  }
    
    </>   
  )
}
