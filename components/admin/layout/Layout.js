import Navbar from './Navbar'
import Header from './Header'
import styles from '../../../styles/Layout.module.css'


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Header />
      <main className={styles.mainContainer}>{children}</main>
    </>
  )
}