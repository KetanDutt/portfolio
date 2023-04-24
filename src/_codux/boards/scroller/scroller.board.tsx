import { createBoard } from '@wixc3/react-board';
import { Scroller } from '../../../components/scroller/scroller';

export default createBoard({
    name: 'Scroller',
    Board: () => <Scroller />
});
