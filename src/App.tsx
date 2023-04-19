import styles from './App.module.scss';
import { Projects } from './components/projects/projects';
import img from './assets/logo.jpeg';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <Projects />
                <div className={styles.bg}>
                    <div className={styles.header}>
                        <div className={styles.logoParent}>
                            <img src={img} className={styles.lgog} />
                        </div>
                        <div className={styles.nameParent}>
                            <p className={styles.name}>Ketan Dutt</p>
                            <p className={styles.description}>
                                A Passionate Game Developer from India
                            </p>
                            <p className={styles.connectText}>Connect with me</p>
                            <div className={styles.connectImgParent}>
                                <img
                                    src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/gmail.png"
                                    className={styles.connectImg}
                                />
                                <img
                                    src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/github.png"
                                    className={styles.connectImg}
                                />
                                <img
                                    src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/instagram.png"
                                    className={styles.connectImg}
                                />
                                <img
                                    src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/linkedin.png"
                                    className={styles.connectImg}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
