import React, { useContext } from "react";
import logo from '../images/logo.png';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Button,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/app-context";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background : '#F1F3FF',
    color: '#000000',
    elevation: '0'
  },
  toolbar: {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
  },
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    alignItems: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "14px",
    marginLeft: theme.spacing(4),
    "&:hover": {
      fontWeight: "bold",
    },
  },
}));

function Navbar() {
  const context = useContext(AppContext);

  const logout =()=> {
    window.open("https://backendch7.herokuapp.com/auth/logout", "_self");
  }
  console.log(context.user)

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar} elevation={0}>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
            <img src={logo} alt="" />
        </div>
          <div className={classes.navlinks}>
            <Link to="/our-services" className={classes.link}>
                Our Services
            </Link>
            <Link to="/why-us" className={classes.link}>
                Why Us
            </Link>
            <Link to="/testimonial" className={classes.link}>
                Testimonial
            </Link>
            <Link to="/faq" className={classes.link}>
                FAQ
            </Link>
            <div className={classes.link}>
                <Avatar>
                <img
                  src={context.email==='user@gmail.com' ? (logo) : (context.user.photos[0].value)}
                  alt="gambar"
                  className="avatar"
                />
                </Avatar>
            </div>
            <div className={classes.link}>
              {context.user.displayName || context.user.username || 'User'}
            </div>
            
            <Button 
              variant="contained" 
              style={{ background: "#5CB85F" }} 
              className={classes.link} 
              onClick={logout}
            >
              {context.user ? ('Logout') : (<Link to="/login">Login</Link>)}
            </Button>
            
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;