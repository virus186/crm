import React from "react";
import styles from "../../../../styles/POSFooter.module.css";

const FooterPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={styles.heading}>Print</div>
            <div className={styles.name}>Thermal Print</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={styles.heading}>Bill</div>
            <div className={styles.name}>A4 Print</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={styles.heading}>Customer</div>
            <div className={styles.name}>Add Customer</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={styles.heading}>Product</div>
            <div className={styles.name}>Add product</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={styles.heading}>Refresh</div>
            <div className={styles.name}>Refresh & Clear</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={styles.heading}>Hold</div>
            <div className={styles.name}>Hold or Draft</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPanel;
