import './App.css';
import React, {useState, useEffect} from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import CardLayout from './layouts/CardLayout';
import DetailCardLayout from './layouts/DetailCardLayout';
import Login from './layouts/Login'
import axios from 'axios';
import { AppContext } from './contexts/app-context';
import jwt_decode from 'jwt-decode';
import HomeLayout from './layouts/HomeLayout';
import Dashboard from './layouts/adminLayouts/dashboard/Dashboard';
import New from './layouts/adminLayouts/new/New';
import Edit from './layouts/adminLayouts/edit/Edit';
import { productInputs} from "./formSource";
import CarsLayout from './layouts/adminLayouts/carsLayout/CarsLayout';

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", { token: user.refreshToken });
      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const getUser = async () => {
      await fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(`ini errornya${err}`);
        });
    };
    getUser();
  }, []);

  const handleClick = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", {email, password})
      setUser(res.data);
      console.log(res.data)
    } catch (err) {
      console.log(`errornya : ${err}`)
    }
  }

  const appContextValue = {
    user,
    email,
    setEmail,
    password,
    setPassword,
    handleClick,
  }

  return (
    <div className="App">
      <AppContext.Provider value={appContextValue}>
        <Routes>
        <Route path='/' element={user ? <Navigate to="/home" /> : <Login />} />
            <Route path='/home' element={user && user.isAdmin == true ? <Navigate to="/dashboard" /> : <HomeLayout /> } />
            <Route path='/login' element={user ? <Navigate to="/" /> : <Login/>} />
            <Route path='/cars' element={user ? <CardLayout /> : <Navigate to="/login" />} />
            <Route path='/cars/:id' element={user ? <DetailCardLayout /> : <Navigate to="/login" />} />
            <Route path='/dashboard' element={ user && user.isAdmin == true ? (<Dashboard />) : (<Login />)} />
            <Route path='/list-cars' element={ user && user.isAdmin == true ? (<CarsLayout />) : (<Login />)} />
            <Route path='/add'element={ <New inputs={productInputs} subTitle="Add" /> }/>
            <Route path='/edit/:id'element={ <Edit inputs={productInputs} subTitle="Edit" /> }/>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
