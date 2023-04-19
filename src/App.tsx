import styles from './App.module.scss';
import { Projects } from './components/projects/projects';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <div className={styles.bg}>
                    <div className={styles.header}>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles.lgog}
                        />
                        <div className={styles.nameParent}>
                            <h4 className={styles.name}>Ketan Dutt</h4>
                            <p className={styles.description}>
                                A Passionate Game Developer from India
                            </p>
                        </div>
                    </div>
                    <Projects />
                </div>
            </header>
        </div>
    );
}

export default App;
