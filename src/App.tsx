import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Scroller } from './components/scroller/scroller';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <p className={styles.someGames}>
                A few of the games I have been involved in developing.
            </p>
            <Scroller />
        </div>
    );
}

export default App;
