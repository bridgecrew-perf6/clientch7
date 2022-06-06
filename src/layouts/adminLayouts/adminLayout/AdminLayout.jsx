import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {Link, useParams, useLocation} from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BreadCrumb from '../../../components/adminComponents/breadcrumb/BreadCrumb'
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;
const blueWidth = 50;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth - blueWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdminLayout({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation()
  const { id } = useParams()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout =()=> {
    window.open("https://backendch7.herokuapp.com/auth/logout", "_self");
  }

  return (
      <>
            <div 
              className='blue-sidebar' 
              style={{
                background: 'blue', 
                width: `${blueWidth}px`, 
                position: 'fixed', 
                zIndex: 1300, 
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
                }}
            > 
            <Link to='/dashboard'>
              <Button>
                <HomeOutlinedIcon style={{ color: 'white' }}  />  
              </Button>
            </Link>
            <Link to='/list-cars'>
              <Button>
                <LocalShippingOutlinedIcon style={{ color: 'white' }} /> 
              </Button>
            </Link>
            <Button onClick={logout}>
                <LogoutIcon style={{ color: 'white' }} /> 
            </Button>
              
            </div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} style={{background: 'white'}} >
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ ml: `${blueWidth}px`, mr: 2, ...(open && { display: 'none' }), color: "black" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText style={{ marginLeft: `${blueWidth}px`}}>
                                    List Car
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText style={{ marginLeft: `${blueWidth}px`}}>
                                    Cars
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                    <BreadCrumb />
                    <Box className="subtitle" sx={{my: '24px', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <Typography variant="h5" gutterBottom component="div" >
                        {
                          location.pathname === '/dashboard' && ('Dashboard')
                        }
                        {
                          location.pathname === '/list-cars' && ('List Car')
                        }
                        {
                          location.pathname === `/edit/${id}` && ('Edit Car')
                        }
                        {
                          location.pathname === '/add' && ('Add Car')
                        }
                      </Typography>
                      {location.pathname === ('/list-cars') && (
                        <Link to='/add' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="medium"><AddIcon /> Add New Car</Button>
                      </Link>
                      )}
                      
                    </Box>
                    
                    {children}
                </Main>
            </Box>
        
      </>  
  );
}
