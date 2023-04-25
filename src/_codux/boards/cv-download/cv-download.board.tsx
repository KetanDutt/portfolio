import { createBoard } from '@wixc3/react-board';
import { CVDownload } from '../../../components/cv-download/cv-download';

export default createBoard({
    name: 'CVDownload',
    Board: () => <CVDownload />
});
