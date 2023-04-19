import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App key={null} />,
    environmentProps: {
        canvasBackgroundColor: '#4a4a4a',
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 1784,
    },
});
