// "use client"; 

// import { useEffect, useState } from "react";

// export default function Footer() {
//   const [clientLoaded, setClientLoaded] = useState(false);

//   useEffect(() => {
//     setClientLoaded(true);
//   }, []);

//   return (
//     <footer>
//       {clientLoaded && <p>{document.title}</p>} {/* Example usage */}
//     </footer>
//   );
// }
'use client'
import React, { useEffect } from 'react'

export default function Footer() {
    useEffect(()=>{
        console.log("Fetch call from useeffect-Footer");
        fetch('https://fakestoreapi.com/products')
    },[]);
    console.log("Footer");
  return (
    <div>Footer</div>
  )
}
