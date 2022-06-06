import React, { PureComponent, useEffect, useState }  from 'react'
import './chart.scss'
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({aspect, title}) => {
  const [cars, setCars] = useState([]);
  
  const fetchCars = async ()=> {
    try {
        const response = await axios.get('https://backendch7.herokuapp.com/api/cars');
        setCars(response.data)
    }catch(error) {
        console.log(error.message);
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])
  
  return (
    <div className='chart' >
      <div className="title">{title}</div>
      <div className="container" style={{ display: 'flex', justifyContent:"center" }}>
      <ResponsiveContainer width="70%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={cars}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' stroke='grid' />
          <XAxis dataKey="name" stroke='gray'/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
      
    </div>
  )
}

export default Chart