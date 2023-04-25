import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Scroller } from './components/scroller/scroller';
import { CVDownload } from './components/cv-download/cv-download';

function App() {
    return (
        <div className={styles.App}>
            <CVDownload />
            <Header />
            <p className={styles.someGames}>Below are some of the games I've worked on</p>
            <Scroller />
        </div>
    );
}

export default App;
