import axios from 'axios'

export const fetchCars = async ({setLoading, setCars})=> {
    setLoading(true);
    try {
        const response = await axios.get('http://localhost:5000/api/cars');
        setCars(response.data)
    }catch(error) {
        console.log(error.message);
    }
    setLoading(false);
}