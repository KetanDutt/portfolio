import styles from './App.module.scss';
import { Projects } from './components/projects/projects';
import img from './assets/logo.jpeg';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <div className={styles.bg}>
                    <div className={styles.header}>
                        <div className={styles.logoParent}>
                            <img src={img} className={styles.logo} />
                        </div>
                        <div className={styles.nameParent}>
                            <p className={styles.name}>Ketan Dutt</p>
                            <p className={styles.description}>
                                A Passionate Game Developer from India
                            </p>
                            <p className={styles.connectText}>Connect with me</p>
                            <div className={styles.connectImgParent}>
                                <a
                                    href="mailto:ketan6196@gmail.com"
                                    target="_blank"
                                    rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/gmail.png"
                                        className={styles.connectImg}
                                    />
                                </a>
                                <a
                                    href="https://github.com/KetanDutt"
                                    target="_blank"
                                    rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/github.png"
                                        className={styles.connectImg}
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/k10.dutt/"
                                    target="_blank"
                                    rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/instagram.png"
                                        className={styles.connectImg}
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ketan-dutt-006104b7/"
                                    target="_blank"
                                    rel="noreferrer">
                                    <img
                                        src="https://raw.githubusercontent.com/KetanDutt/KetanDutt.github.io-Source/master/assets/linkedin.png"
                                        className={styles.connectImg}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Projects />
            </header>
        </div>
    );
}

export default App;
