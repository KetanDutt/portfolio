import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Scroller } from './components/scroller/scroller';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Scroller />
        </div>
    );
}

export default App;
