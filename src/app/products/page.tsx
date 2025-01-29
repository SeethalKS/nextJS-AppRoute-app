
import React, { Suspense } from "react";

import Link from "next/link";
import ProductList from "../components/product-list/ProductList";
import { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Product list page",
};
export default async function Products(props: any) {
  console.log("Products page executed", props);

  const cookielist = await cookies();
  const tokencookie = cookielist.get("authToken");
  console.log("Token cookie", tokencookie, tokencookie?.value);

  const headerslist = await headers();
  const referer = headerslist.get("referer");
  console.log("referers", referer);
  console.log(headerslist.get("User-Agent"));
  console.log(headerslist.get("Host"));

  return (
    <div>
      <Link
        href="#recommended"
        style={{
          textDecoration: "none",
          color: "red",
          fontSize: "15px",
          fontStyle: "italic",
        }}
      >
        Go to end of the page 👇
       
      </Link>
      <div>
        <Suspense fallback={<span style={{ color: "red" }}>Loading.....</span>}>
          <ProductList />
        </Suspense>
      </div>
      <h3
        id="recommended"
        style={{ color: "red", fontSize: "15px", fontStyle: "italic" }}
      >
        End of the Page
      </h3>
    </div>
  );
}
