import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixNormalOutlinedIcon from '@mui/icons-material/AutoFixNormalOutlined';
import { Link } from 'react-router-dom';

const card = ({car, handleDelete,loadingButton, setLoadingButton}) => {

  return (
    <div className='card'>
        <Card sx={{ maxWidth: 280, width: 280, pb: 2}}>
        <CardMedia
            component="img"
            alt="green iguana"
            height={200}
            image={car.image}
            sx={{ p: 2 }}
        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {car.name}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
            {`Rp. ${Number(car.price).toLocaleString()} / hari`}
            </Typography>
            <div style={{display: 'flex'}}>
              <KeyOutlinedIcon fontSize='small' sx={{mr: 1}}/>
              <Typography gutterBottom variant="body2" color="text.secondary">
                {car.createdAt}
              {/* {`  ${new Date(car.createdAt).getDate()} ${new Intl.DateTimeFormat('id-ID', { month: 'long'}).format(car.createdAt)} ${new Date(car.createdAt).getFullYear()} - ${new Date(car.finishAt).getDate()} ${new Intl.DateTimeFormat('id-ID', { month: 'long'}).format(car.finishAt)} ${new Date(car.finishAt).getFullYear()}`} */}
              </Typography>
            </div>
            <div style={{display: 'flex'}}>
              <AccessTimeOutlinedIcon fontSize='small' sx={{mr: 1}}/>
              <Typography gutterBottom variant="body2" color="text.secondary">
                {car.updatedAt}
              {/* {`Update at ${new Date(car.updateAt).getDate()} ${new Intl.DateTimeFormat('id-ID', { month: 'long'}).format(car.updateAt)} ${new Date(car.updateAt).getFullYear()}`} */}
              </Typography>
            </div>
            
        </CardContent>
        <CardActions sx={{ displlay: 'flex' }}>
            <Button 
            variant="outlined" 
            color="error" 
            startIcon={<DeleteIcon />} 
            fullWidth 
            onClick={() => handleDelete(car._id)}
            sx={{mx: 1}} >
              {loadingButton ? <p>Process...</p> : <p>Delete</p>}
            </Button >
            <Link to={`/edit/${car._id}`} style={{ textDecoration: 'none' }}>
              <Button 
              variant="contained" 
              color="success" 
              startIcon={<AutoFixNormalOutlinedIcon />} 
              fullWidth
              sx={{mx: 1}} >
                Edit
              </Button>
            </Link>
            
        </CardActions>
        </Card>
    </div>
  )
}

export default card