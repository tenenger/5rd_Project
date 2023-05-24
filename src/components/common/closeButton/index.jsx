import { SLayout } from './CloseButton.style';

const CloseButton = ({ handleCloseButtonClick }) => <SLayout onClick={handleCloseButtonClick}>&times;</SLayout>;

export default CloseButton;
