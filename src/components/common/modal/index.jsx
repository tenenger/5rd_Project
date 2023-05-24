import { CloseButton } from 'components/common';

import { SContainer, SLayout } from './Modal.style';

const Modal = ({ isOpen, handleCloseClick, children }) =>
  isOpen && (
    <SLayout onClick={handleCloseClick}>
      <SContainer>
        <CloseButton handleCloseButtonClick={handleCloseClick} />
        {children}
      </SContainer>
    </SLayout>
  );

export default Modal;
