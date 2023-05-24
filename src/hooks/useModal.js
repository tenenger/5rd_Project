import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => setIsOpen(true);
  const handleCloseClick = e => {
    if (e.target !== e.currentTarget) return;

    setIsOpen(false);
  };
  const handleToggleClick = () => setIsOpen(!isOpen);

  return {
    isOpen,
    handleOpenClick,
    handleCloseClick,
    handleToggleClick,
  };
};

export default useModal;
