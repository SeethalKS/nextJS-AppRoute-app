"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { ProductsService } from "@/app/services/products-service";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function Home() {
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
      {/* Bootstrap Carousel */}
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
                width={250}
                height={350}
                className="d-block w-100"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{product.title}</h5>
              </div>
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
          <h4>Shop Now</h4>
        </Link>
      </div>
    </div>
  );
}
