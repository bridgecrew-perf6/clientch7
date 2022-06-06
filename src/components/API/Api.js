import axios from 'axios'

export const fetchCars = async ({setLoading, setCars})=> {
    setLoading(true);
    try {
        const response = await axios.get('https://backendch7.herokuapp.com/api/cars');
        setCars(response.data)
    }catch(error) {
        console.log(error.message);
    }
    setLoading(false);
}