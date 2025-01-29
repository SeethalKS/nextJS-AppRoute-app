'use client';
import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav/Nav";
import Link from "next/link";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import CartContext, { CartItem } from "./context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      return prevItems.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as CartItem[]);
    });

    setCartCount((prevCount) => Math.max(prevCount - 1, 0));
  };
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Nav />
          <CartContext.Provider
            value={{
              cartItems,
              cartCount,
              addToCart,
              removeFromCart,
              setCartItems,
              setCartCount,
            }}
          >
            {children}
          </CartContext.Provider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
