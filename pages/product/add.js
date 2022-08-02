/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Link from "next/link";
import mongoose from "mongoose";
import React, { useReducer, useState } from "react";
import Layout from "../components/admin/Layout/Layout";
import styles from "../../styles/Product.module.css";

const addProduct = () => {
  const [title, setTitle] = useState("");
  const [sku, setSku] = useState("");
  const [qty, setQty] = useState("");
  const [images, setImages] = useState("");
  const [desc, setDesc] = useState("");
  const [hsn, setHsn] = useState("");
  const [cat, setCat] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState("");
  const [pprice, setPPrice] = useState("");
  const [isManageble, setIsManageble] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [product, setProduct ] = useState();

  const saveBtnHandler = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    let products = {
      title: title,
      sku: sku,
      quantity: qty,
      desc: desc,
      hsn_code: hsn,
      img: images,
      categories: cat,
      size: size,
      color: color,
      isManageble: isManageble,
      price: price,
      p_price: pprice,
    };
    try {
      const p = await fetch("/api/products/add",{
        method: "POST",
        body: JSON.stringify(products),
      });
      console.log(p);
      setSubmitting(false);
      if(p.status == 201){
        setProduct(p)
        location.replace("/product")
      }else{
        alert('Error while adding product. Please try  after some time');
      }
      return JSON.stringify(p);
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);

  };

  return (
    <div>
      <Head>
        <title>Kiraanaghar Add Product</title>
        <meta name="description" content="Kiraanaghar Add Product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.productContainer}>
          <div className={styles.productWrapper}>
            <div className={styles.btnContainer}>
              <div className={styles.pageTitle}>Create Products</div>
              <div className={styles.btnMainDiv}>
                <div className={styles.SaveBtn} onClick={saveBtnHandler}>
                  Save
                </div>
                <Link href="/product" passHref>
                  <div className={styles.btn}>Cancel</div>
                </Link>
              </div>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.container}>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>Title</div>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter Your Product Title"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>SKU</div>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      name="sku"
                      id="sku"
                      placeholder="Enter Your Product sku"
                      onChange={(e) => {
                        setSku(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>Quantity</div>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      name="qty"
                      id="qty"
                      placeholder="Enter Your Product Quantity"
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>Images</div>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      name="images"
                      id="images"
                      placeholder="Enter Your Product images"
                      onChange={(e) => {
                        setImages(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>HSN Code</div>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      name="hsn"
                      id="hsn"
                      placeholder="Enter Your Product HSN Code"
                      onChange={(e) => {
                        setHsn(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>Categories</div>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      name="cat"
                      id="cat"
                      placeholder="Enter Your Product Categories"
                      onChange={(e) => {
                        setCat(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>Size</div>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      name="size"
                      id="size"
                      placeholder="Enter Your Product Available Sizes"
                      onChange={(e) => {
                        setSize(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>Colour</div>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      name="color"
                      id="color"
                      placeholder="Enter Your Product Available Colours"
                      onChange={(e) => {
                        setColor(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>Selling Price</div>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      placeholder="Enter Your Product Selling Price"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>Purchase Price</div>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      name="pprice"
                      id="pprice"
                      placeholder="Enter Your Product Purchase Price"
                      onChange={(e) => {
                        setPPrice(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>Is Managable</div>
                  <div className={styles.inputBox}>
                    <select
                      name="isManageble"
                      onChange={(e) => {
                        setIsManageble(e.target.value);
                      }}
                    >
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputTitle}>Description</div>
                  <div className={styles.inputBox}>
                    <textarea
                      type="text"
                      name="desc"
                      id="desc"
                      placeholder="Enter Your Product description"
                      onChange={(e) => {
                        setDesc(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.mt20}>
                  <button className={styles.SaveBtn} onClick={saveBtnHandler}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default addProduct;
