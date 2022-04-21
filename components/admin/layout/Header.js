import styles from '../../../styles/Header.module.css'
import image from '../../../public/images/user.png'
import Image from 'next/image'
const Header = () => {
  return (
    <div className={styles.headcontainer}>
        <div className={styles.headWrapper} >
            <div className={styles.title}>
                <h2>Hello, <span>Ajaz Ali</span></h2>
                <p>Welcome to the ASA CRM</p>
            </div>
        </div>

        <div className={styles.profile}>
            <div className={styles.profileImage}>
                <Image src={image} alt="profile" />
            </div>
        </div>

    </div>
  )
}

export default Header