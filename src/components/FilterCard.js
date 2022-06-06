import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    Box, 
    Grid, 
    Paper, 
    styled , 
    TextField, 
    FormControl, 
    InputLabel, 
    NativeSelect, 
    Button
} from '@material-ui/core';
import { useDispatch } from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import { getFilterCars } from '../redux/carSlice';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  background: 'none'
}));

export default function FilterCard() { 
    const [name, setName] = useState('');
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const handleSearch = (e) => {
        if(name === '' || name ==='select') {
            dispatch(getFilterCars(''));
            navigate({
            pathname: '/cars',
            })
        }else{
            navigate({
            pathname: '/cars',
            })
            dispatch(getFilterCars(name));
        }
    }

  return (
      <>
      <div className="FilterCard" style={{ background: 'pink',  position: 'relative', display: 'flex', justifyContent: 'center' }}>
         <Box container boxShadow={4} borderRadius={8} sx={{ flexGrow: 1 }} style={{borderRadius:'8px', boxShadow:'0px 2px 10px -1px #444444', position: 'absolute', top: '-56px', background: 'white', width: '80%', zIndex: 1000, display: 'flex', alignItems: 'center' , padding: '24px'}} >
            <Grid elevation={0} container spacing={1}>
                <Grid pt={4} elevation={0} item xs >
                    <Item elevation={0}>
                    <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Tipe Driver
                                </InputLabel>
                                
                                    <NativeSelect
                                    defaultValue={30}
                                    inputProps={{
                                        name: 'age',
                                        id: 'uncontrolled-native',
                                    }}
                                    // onChange={(e) => setQuery(e.target.value.toLowerCase())}
                                    onChange={(e) => setName(e.target.value.toLowerCase())}
                                    > 
                                        <option value="select">select all</option>
                                        <option value="Avanza">Avanza</option>
                                        <option value="Tesla">Tesla</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="Mercendes" >Mercendes</option>
                                        <option value="BMW">BMW</option>
 
                                    </NativeSelect>
                               
                                
                            </FormControl>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs >
                    <Item elevation={0}>
                    <TextField
                        fullWidth
                        id="date"
                        label="Tanggal"
                        type="date"
                        defaultValue={(new Date())}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </Item>
                </Grid>
                <Grid item xs>
                    <Item elevation={0}>
                    <TextField
                        fullWidth
                        id="time"
                        label="Waktu Jemput/Ambil"
                        type="time"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                        sx={{ width: 220 }}
                    />
                    </Item>
                </Grid>
                <Grid item xs >
                    <Item elevation={0}>
                    <TextField
                        fullWidth
                        id="outlined-number"
                        defaultValue='0'
                        label="Jumlah Penumpang (optional)"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        
                        />
                    </Item>
                </Grid>
                <Grid item>
                    <Item elevation={0}>
                        {
                            location.pathname === '/cars' ? 
                            (
                                <Button variant="contained" style={{ background: "#5CB85F" }} onClick={handleSearch}>
                                    Edit
                                </Button>
                            ) 
                            : 
                            (
                                <Button variant="contained" style={{ background: "#5CB85F" }} onClick={handleSearch}>
                                    Cari Mobil
                                </Button>
                            )
                        }
                    </Item>
                </Grid>
                
            </Grid>
        </Box>            
      </div>
        
      </>
    
  )
}

