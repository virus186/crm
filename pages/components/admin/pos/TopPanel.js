import { faPlusCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../../styles/POSTop.module.css";

const TopPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.headerItems}>
          <div className={styles.barcodeContainer}>
            <span>Barcode: </span>
            <div className={styles.barcodeInput}>
              <input type="text" />
            </div>
          </div>
          <div className={styles.productContainer}>
            <span>Product: </span>
            <div className={styles.productInput}>
              <input type="text" />
            </div>
          </div>

          <div className={styles.quantityContainer}>
            <span>Quanity: </span>
            <div className={styles.quantityInput}>
              <input type="text" />
            </div>
          </div>

          <div className={styles.quantityContainer}>
            <span>Discount: </span>
            <div className={styles.quantityInput}>
              <input type="text" />
            </div>
          </div>

          <div className={styles.quantityContainer}>
            <span>Price: </span>
            <div className={styles.quantityInput}>
              <input type="text" />
            </div>
          </div>

          <div className={styles.quantityContainer}>
            <span>Tax: </span>
            <div className={styles.quantityInput}>
              <input type="text" />
            </div>
          </div>
          <div className={styles.addContainer}>
            <span>
              <FontAwesomeIcon
                icon={faPlusCircle}
                style={{ width: "30px", cursor: "pointer" }}
              />
            </span>
          </div>
        </div>
        <div className={styles.cartItems}>
            <table>
                <thead>
                    <tr>
                    <th><input type='checkbox' /></th>
                    <th>SR No.</th>
                    <th>Barcode</th>
                    <th>Item Description</th>
                    <th>Quantity</th>
                    <th>Discount %</th>
                    <th>Unit Rate</th>
                    <th>Tax</th>
                    <th>Net Value</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>1</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>2</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>3</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>4</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>5</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>6</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>7</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>8</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>9</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>10</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>11</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>12</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>13</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>14</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                    <tr>
                    <td><div className={styles.trashIcon}><input type='checkbox' /></div></td>
                    <td>15</td>
                    <td>123456789123</td>
                    <td>Basmati Rice 10 KG Combo Pack </td>
                    <td>1</td>
                    <td>5%</td>
                    <td>700</td>
                    <td>5%</td>
                    <td>700</td>
                    <td><div className={styles.trashIcon}><FontAwesomeIcon
                icon={faTrashAlt}
                style={{ width: "18px", cursor: "pointer", color: "#f00"}}
              /></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default TopPanel;
