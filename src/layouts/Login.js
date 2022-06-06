import React from 'react'
import LoginBackgroundSide from '../components/LoginBackgroundSide'
import LoginFormSide from '../components/LoginFormSide'

export default function Login({user}) {
  return (
    <div className="Login">
        <LoginBackgroundSide />
        <LoginFormSide
        user={user}
         />
    </div>
  )
}
