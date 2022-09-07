import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'
const styles = {
    Header:'bg-[#fdfdfd] text-black h-30 flex gap-[100px] w-full p-[10px]',
    headerWrapper:'flex justify-center h-full max-w-screen-xl mx-auto px-4',
    nav:'flex justify-center items-center gap-[20px]',
    navItem:'relative mr-1 cursor-pointer hover:opacity-60',
    badge:'rounded-full bg-blue-600 h-1 absolute bottom-5 right-0 top-1 ring-4',
    inputContainer:'flex items-center justify-center p-2 rounded bg-[#fefefe]',
    input:'bg-transparent outline-none text-white w-70 ml-3',


}

const Header = () => {
  return (
    <div className={styles.Header}>
        <Image
        src='https://web4crypto.io/media/2022/08/ezgif.com-gif-maker.gif'
        alt='logo'
        width={300}
        height={80}
        />

        <div className={styles.headerWrapper}>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <div className={styles.navLink}>CryptoCurrensies</div>
                    <div className={styles.badge}/>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Exchanges</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>NFT</div>
                    <div className={styles.badge}/>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Portfolio</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>WatchList</div>
                    <div className={styles.badge}/>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Learn</div>
                </div>

            </nav>

            <div className='flex items-center'>
                {/* <connectButton/> */}
                <div className={styles.inputContainer}>
                    <Search /> 
                    <input  className={styles.input} placeholder = 'Search'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header