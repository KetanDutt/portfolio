import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App key={null} />,
    environmentProps: {
        canvasBackgroundColor: '#4a4a4a',
        windowWidth: 441,
        windowHeight: 674,
        canvasWidth: 1784,
    },
});
