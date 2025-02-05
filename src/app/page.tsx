'use client';

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { ProductsService } from "@/app/services/products-service";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await ProductsService.getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);
  const filteredArray_products = products.filter((f) => f.image);
  console.log(filteredArray_products);
  return (
    <div>
      <div
        id="productCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {products.map((product: any, index: number) => (
            <div
              key={product.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={190}
                height={205}
                className="d-block w-80"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="setalign">
        <Link href="/products" className="nav-link">
          <h4 style={{color:'red',fontStyle:'italic',left:'15px'}}>Shop Now</h4>
        </Link>
      </div>
    </div>
  );
}
