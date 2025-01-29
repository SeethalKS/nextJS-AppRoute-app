"use client"; 

import { useEffect, useState } from "react";

export default function Footer() {
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  return (
    <footer>
      {clientLoaded && <p>{document.title}</p>} {/* Example usage */}
    </footer>
  );
}
