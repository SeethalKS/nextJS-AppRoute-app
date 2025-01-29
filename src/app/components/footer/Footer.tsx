'use client'
import React, { useEffect } from 'react'
import './Footer.css'
export default function Footer() {
    useEffect(()=>{
        console.log("Fetch call from useeffect-Footer");
        fetch('https://fakestoreapi.com/products')
    },[]);
    console.log("Footer");
  return (
    <div className='downdiv'>@FooterAppComm</div>
  )
}
