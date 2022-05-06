import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faComputer, faFileCircleCheck, faGears, faListAlt, faTachometerAlt, faUsers, faUsersGear } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styles from '../../../../styles/Navbar.module.css'
import Link from 'next/link'

function Navbar() {
  return (
    <div className={styles.navcontailner}>
        <div className={styles.logo}>
            <h2>Kiraanaghar</h2>
        </div>
        <div className={styles.navwrapper}>
            <ul>
             <Link href={"/"} passHref><a><li><FontAwesomeIcon icon={faTachometerAlt} style={{width:"18px", cursor:"pointer"}} /> <span>Dashboard</span></li></a></Link>
             <Link href={"/product"} passHref><a><li><FontAwesomeIcon icon={faListAlt} style={{width:"18px", cursor:"pointer"}} /> <span>Products</span></li></a></Link>
             <Link href={"/stock"} passHref><a><li><FontAwesomeIcon icon={faChartLine} style={{width:"18px", cursor:"pointer"}} /> <span>Stock</span></li></a></Link>
             <Link href={"/bill"} passHref><a><li><FontAwesomeIcon icon={faComputer} style={{width:"18px", cursor:"pointer"}} /> <span>Bill</span></li></a></Link>
             <Link href={"/supplier"} passHref><a><li><FontAwesomeIcon icon={faUsers} style={{width:"18px", cursor:"pointer"}} /> <span>Supplier</span></li></a></Link>
             <Link href={"/supplier-due"} passHref><a><li><FontAwesomeIcon icon={faUsersGear} style={{width:"18px", cursor:"pointer"}} /> <span>Supplier Due</span></li></a></Link>
             <Link href={"/customer"} passHref><a><li><FontAwesomeIcon icon={faUsers} style={{width:"18px", cursor:"pointer"}} /> <span>Customer</span></li></a></Link>
             <Link href={"/customer-due"} passHref><a><li><FontAwesomeIcon icon={faUsersGear} style={{width:"18px", cursor:"pointer"}} /> <span>Customer Due</span></li></a></Link>
             <Link href={"/settings"} passHref><a><li><FontAwesomeIcon icon={faGears} style={{width:"18px", cursor:"pointer"}} /> <span>Setting</span></li></a></Link>
            </ul>
        </div>

    </div>
  )
}

export default Navbar