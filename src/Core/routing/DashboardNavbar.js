import React from 'react'
import Navbar from './navbar'
import { useLocation } from "react-router-dom"


export default () => {
    const { pathname } = useLocation()
    const navbarLogin = !pathname.includes('login')
    return navbarLogin ? <Navbar /> : null
}

