import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation, useParams } from 'react-router-dom'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumb() {
  const location = useLocation()
  const { id } = useParams()
  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      <Typography key="3" color="text.primary">
      {
        location.pathname === '/dashboard' && ('Dashboard')
      }                
      {
        location.pathname === '/list-cars' && ('Car')
      }
      {
        location.pathname === `/edit/${id}` && ('Edit')
      }
      {
        location.pathname === '/add' && ('Add')
      }                  
    </Typography>
    </Link>,
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      {
        location.pathname === '/dashboard' && ('dashboard')
      }                
      {
        location.pathname === '/list-cars' && ('list car')
      }
      {
        location.pathname === `/edit/${id}` && ('edit car')
      }
      {
        location.pathname === '/add' && ('add car')
      }
    </Link>,
    
    
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
