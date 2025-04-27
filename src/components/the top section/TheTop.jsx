
import chronologo from '/src/assets/chrono.png';
import styles from './TheTop.module.css'



const TheTop = () => {

    return (
        <>
            <div>
                <div className={styles.top}>

                    <div className={styles.logo}>
                        <img src={chronologo} alt="Logo" />
                        <p>ChronoX</p>
                    </div>

                    <div className={styles.section}>
                        <p>About us</p>
                        <p>Terms and conditions</p>
                        <p>Privacy Policy</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default TheTop;

