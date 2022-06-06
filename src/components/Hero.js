import React from 'react';
// import { styled } from '@mui/material/styles';
import { Grid, Typography, styled, makeStyles } from '@material-ui/core';
import ImageCar from '../images/img_car.png'

const useStyles = makeStyles((theme) => ({
    Hero: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '450px',
        position: 'relative',
        background : '#F1F3FF',
    },
    subtitleOne : {
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '150%',
        fontFamily: 'Helvetica'
    },
    normalText: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '20px',
        fontFamily: 'Helvetica'
    }
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function Hero() {

    const classes = useStyles();

    return (
        <div className={classes.Hero}>
            <Grid item direction="row" xs={6} style={{ paddingLeft: '80px' }}>
                <Grid item >
                    <Typography gutterBottom className={classes.subtitleOne}>
                        Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                    </Typography>
                    <p gutterBottom className={classes.normalText} style={{ paddingRight: '132px' }}>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                </Grid>
            </Grid>   
            <Grid xs={6}>
                <Img style={{ position: 'absolute', bottom: '0px', right: 0 }} alt="complex" src={ImageCar} />
            </Grid>         
        </div>
    )
}
