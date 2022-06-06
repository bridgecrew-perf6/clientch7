import React from 'react'
import { Grid, Paper, styled } from '@material-ui/core';
import IconFacebook from '../images/icon_facebook.png';
import IconInstagram from '../images/icon_instagram.png';
import IconMail from '../images/icon_mail.png';
import IconTwitter from '../images/icon_twitter.png';
import IconTwich from '../images/icon_twitch.png';
import logo from '../images/logo.png';

const Item = styled(Paper)(() => ({
  background: 'none'
}));

export default function Footer() {
  return (
    <div className="Footer">
        <Grid elevation={0} container style={{ background: 'white',  padding: '100px 80px', display: 'flex', justifyContent: 'center'}} display={'flex'} justifyContent={"center"}>
                <Grid item xs style={{ display: 'flex ', justifyContent: 'center' }}>
                    <Item elevation={0}>
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </Item>
                </Grid>
                <Grid item xs style={{ display: 'flex ', justifyContent: 'center' }}>
                    <Item elevation={0}>
                        <p>Our services</p>
                        <p>Why Us</p>
                        <p>Testimonial</p>
                        <p>FAQ</p>
                    </Item>
                </Grid>
                <Grid item xs style={{ display: 'flex ', justifyContent: 'center' }}>
                    <Item elevation={0}>
                        <p>Connect with us</p>
                        <div className="image-group">
                            <img src={IconFacebook} style={{ paddingRight: "8px" }} alt="" />
                            <img src={IconInstagram} style={{ paddingRight: "8px" }} alt="" />
                            <img src={IconMail} style={{ paddingRight: "8px" }} alt="" />
                            <img src={IconTwitter} style={{ paddingRight: "8px" }} alt="" />
                            <img src={IconTwich} style={{ paddingRight: "8px" }} alt="" />
                        </div>
                        
                    </Item>
                </Grid>
                <Grid item xs style={{ display: 'flex ', justifyContent: 'center' }}>
                    <Item elevation={0}>
                        <p>Copyright Binar 2022</p>
                        <img src={logo} alt="" />
                    </Item>
                </Grid>
            </Grid>
    </div>
  )
}
