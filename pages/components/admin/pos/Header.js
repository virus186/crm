import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHouseChimney,
  faBars,
  faFileAlt,
  faPlusCircle,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "../../../../styles/POSHeader.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.headWrapper}>
        <div className={styles.leftContent}>
          <div className={styles.menu}>
            <span>
              <FontAwesomeIcon
                icon={faBars}
                style={{ width: "24px", cursor: "pointer" }}
              />
            </span>
            <span>
            <Link href={"/"} passHref><FontAwesomeIcon
                icon={faHouseChimney}
                style={{ width: "24px", cursor: "pointer" }}
              /></Link>
            </span>
          </div>
          <div className={styles.bill}>
            <span>
              <FontAwesomeIcon
                icon={faFileAlt}
                style={{ width: "18px", cursor: "pointer" }}
              />
            </span>
            <p>Bill No : 01</p>
          </div>
        </div>
        <div className={styles.rightContent}>
          <span>
            <FontAwesomeIcon
              icon={faGear}
              style={{ width: "24px", cursor: "pointer" }}
            />
          </span>
          <div className={styles.customerInput}>
            <input type="text" placeholder="Select Customer" />
            <div className={styles.addButton}>
              <FontAwesomeIcon
                icon={faPlusCircle}
                style={{ width: "18px", cursor: "pointer" }}
              />
            </div>
            <div className={styles.editButton}>
              <FontAwesomeIcon
                icon={faEdit}
                style={{ width: "18px", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
