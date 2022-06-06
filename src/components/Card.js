import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core';
import CardItem from './CardItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, carSelectors } from '../redux/carSlice';

const useStyles = makeStyles((theme) => ({
    card: {
        background: 'white',
        padding: '100px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

export default function Card() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const cars = useSelector(carSelectors.selectAll)

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch])

  console.log(cars)

  return (
    <div 
    className={classes.card}>
        <div 
          className='CardItem' 
          style={{ 
            width: '80%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'start', 
            flexFlow: 'wrap'
          }} 
        > 
        
          <CardItem cars={cars} />
        </div> 
    </div>
  )
}
