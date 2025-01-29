import { ProductsService } from "@/app/services/products-service";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(props: any) {
  console.log("generateMetadata", props);
  const productId = props.params.productId;
  var product;
  if (productId) {
    product = await ProductsService.getProductsById(productId);
    return {
      title: product.title,
    };
  }
  return {
    title: "Prod detail page",
  };
}
export default async function ProductDetail(props: any) {
  console.log(props);
  const productId = props.params.productId;
  var product;
  if (productId) {
    product = await ProductsService.getProductsById(productId);
  }
  return (
    <div>
      <h6 style={{ padding: "10px" }}>{product.title}</h6>
      <hr />
      <img src={product.image} height={50} width={50} /> ₹ {product.price}
      <h6>{product.description}</h6>
    </div>
  );
}
