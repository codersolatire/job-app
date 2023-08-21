import React, { useState } from 'react';
import Modal from '../Modal'; 

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header-wrap">
          <button className="primary-btn" onClick={handleOpenModal}>
            Create Job
          </button>
          <h1 className="heading">Careers</h1>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;
