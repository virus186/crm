import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/admin/Layout/Layout";
import { useRouter } from "next/router";

const ProductDetails = ({products, id}) => {
  
  return (
    <div>
      <Head>
        <title>Kiraanaghar Add Product</title>
        <meta name="description" content="Kiraanaghar Add Product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Product Details Page {products}
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {

  const id = context.params.id;
  const url = "/api/products/get?id="+id;
  let products = {}
  try {
    products = await fetch(url);
    
  } catch (error) {
    console.log(error);
  }

  return {
    props: { products: JSON.stringify(products), id: id },
  };
}


export default ProductDetails;
