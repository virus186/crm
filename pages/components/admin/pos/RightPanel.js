import React from "react";
import styles from "../../../../styles/POSRight.module.css";

const RightPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
          <div className={styles.heading}>
              Bill Details
          </div>
          <div className={styles.content}>
              <div className={styles.leftContent} >Gross Amount</div>
              <div className={styles.rightContent} >0.00</div>
          </div>
          <div className={styles.content}>
              <div className={styles.leftContent} >IGST Amount</div>
              <div className={styles.rightContent} >0.00</div>
          </div>
          <div className={styles.content}>
              <div className={styles.leftContent} >CGST Amount</div>
              <div className={styles.rightContent} >0.00</div>
          </div>
          <div className={styles.content}>
              <div className={styles.leftContent} >SGST Amount</div>
              <div className={styles.rightContent} >0.00</div>
          </div>
          <div className={styles.content}>
              <div className={styles.leftContent} >Cess Amount</div>
              <div className={styles.rightContent} >0.00</div>
          </div>
          <div className={styles.content}>
              <div className={styles.leftContent} >Net Price</div>
              <div className={styles.rightContent} >0.00</div>
          </div>
          <div className={styles.content}>
              <div className={styles.leftContent} >Round Off</div>
              <div className={styles.rightContent} >0.00</div>
          </div>
          <div className={styles.content}>
              <div className={styles.leftContent} >Product Discount</div>
              <div className={styles.rightContent} >0.00</div>
          </div>
          <div className={styles.content}>
              <div className={styles.leftContent} >Discount</div>
              <div className={styles.rightContent} >0.00</div>
          </div>
          <div className={styles.content}>
              <div className={styles.leftContent} >Transport Charge</div>
              <div className={styles.rightContent} >0.00</div>
          </div>
          <div className={styles.content}>
              <div className={styles.leftContent} >Total Amount</div>
              <div className={styles.rightContent} >0.00</div>
          </div>
          <div className={styles.footerTitle}>
              Net Amount
          </div>
          <div className={styles.footerAmount}>
              0.00
          </div>
      </div>
    </div>
  );
};

export default RightPanel;
