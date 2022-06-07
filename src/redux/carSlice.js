import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getCars = createAsyncThunk("car/getCars", async() => {
    const response = await axios
    .get(`http://localhost:5000/api/cars`);
    return response.data;
}
)

export const getFilterCars = createAsyncThunk("car/getFilterCars", async({name}) => {
    const response = await axios
    .get(`http://localhost:5000/api/cars?search=${name}`)
    return response.data;
}
)

const carEntity = createEntityAdapter({
    selectId: (car) => car._id || car.id
})

const carSlice = createSlice({
    name: "car",
    initialState: carEntity.getInitialState(),
    extraReducers: {
       [getCars.fulfilled] : (state, action) => {
           carEntity.setAll(state, action.payload)
           state.status = 'get car success';
       },
       [getCars.pending] : (state, action) => {
        state.status = 'get car loading..';
        },
       [getFilterCars.fulfilled] : (state, action) => {
           carEntity.setAll(state, action.payload)
           state.status = 'get car success';
       },
       [getFilterCars.pending] : (state, action) => {
        state.status = 'get car loading..';
        },
    }
});

export const carSelectors = carEntity.getSelectors(state => state.car);

export default carSlice.reducer;
