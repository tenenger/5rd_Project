import { useRecoilState } from 'recoil';

import { dustModalState, isDustModalState } from 'recoil/atoms';

const useDustModal = () => {
  const [sidoDust, setSidoDust] = useRecoilState(dustModalState);
  const [isOpen, setIsOpen] = useRecoilState(isDustModalState);

  const handleOpenClick = () => setIsOpen(true);
  const handleCloseClick = e => {
    if (e.target !== e.currentTarget) return;

    setIsOpen(false);
  };
  const handleToggleClick = () => setIsOpen(!isOpen);

  const handleSetSidoDust = sidoDust => setSidoDust(sidoDust);

  return {
    sidoDust,
    handleSetSidoDust,
    isOpen,
    handleOpenClick,
    handleCloseClick,
    handleToggleClick,
  };
};

export default useDustModal;
