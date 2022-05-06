import styles from '../../../../styles/Header.module.css'
import image from '../../../../public/images/user.png'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

const Header = () => {
    
  const { data: session } = useSession()
    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }    
  const handleSignout = (e) => {
        e.preventDefault()
        signOut()
      }
  return (
    <div className={styles.headcontainer}>
        <div className={styles.headWrapper} >
            <div className={styles.title}>
                {session && <h2>Hello, <span>{session.user.name ?? session.user.email}</span></h2>}
                {!session && <h2>Hello, <span>Please Sign in</span></h2>}
                <p>Welcome to the Kiraanaghar</p>
            </div>
        </div>

        {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  } 
        {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  } 

        <div className={styles.profile}>
            <div className={styles.profileImage}>
                {session && <span>{session.user.name ?? session.user.email}</span> }
                {!session && <Image src={image} alt="profile" /> }
                
            </div>
        </div>

    </div>
  )
}

export default Header