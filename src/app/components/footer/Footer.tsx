'use client'
import React, { useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log("Fetch call from useEffect-Footer");
      fetch('https://fakestoreapi.com/products');
    }
  }, []);

  console.log("Footer");

  return (
    <div className='downdiv'>@DummyAmazon</div>
  );
}
