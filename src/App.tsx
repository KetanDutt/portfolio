import styles from './App.module.scss';
import { Projects } from './components/projects/projects';
import img from '../assets/logo.jpeg';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <Projects />
                <div className={styles.bg}>
                    <div className={styles.header}>
                        <img src={img} className={styles.lgog} />
                        <div className={styles.nameParent}>
                            <h4 className={styles.name}>Ketan Dutt</h4>
                            <p className={styles.description}>
                                A Passionate Game Developer from India
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
