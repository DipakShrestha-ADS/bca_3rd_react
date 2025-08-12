import React, { useState } from 'react';
import Modal from 'react-modal';
import './modal_example.css';

Modal.setAppElement('#root'); // This is to prevent screen readers from reading content outside of the modal

const SolarPanels = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Solar Panels Info</button>
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        style={{
          content: {
            maxWidth: '600px',
            margin: 'auto',
            padding: '0',
            // height: '80vh',
            overflow: 'hidden',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: 'none',
          }
        }}
      >
        <div className="header">
          <h2 style={{ margin: 0, color: '#fff' }}>Solar Panels</h2>
          <button onClick={closeModal} style={{
            position: 'absolute',
            right: '20px',
            top: '30px',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            color: '#fff'
          }}>×</button>
        </div>
        <div style={{ 
          // padding: '10px 20px', 
          // height: 'calc(100% - 17%)', 
          // height: '70vh',
          overflowY: 'auto', 
          background: 'linear-gradient(to bottom, #ffffff, #D4E9D7)',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
        }}  className='content'>
          {/* <style>
            {`
              ::-webkit-scrollbar {
                width: 8px;
              }
              ::-webkit-scrollbar-thumb {
                background-color: #3d9f4b;
                border-radius: 4px;
              }
              ::-webkit-scrollbar-track {
                background: transparent;
              }
            `}
          </style> */}
          <p>
            Mr. Padhya started in Africa as Energy Solutions (Solar, electric, generator: supplier, repair & maintenance, 
            and sustainability) where no power supply exists, and the temperature exceeds to degrees. Mr. Padhya is 
            currently the Chief Executive Officer of JSM Group of Companies for Africa and Asia. He has expanded his 
            partnership agreements with a Europe-based global energy company and looking forward to the new opportunity 
            in Africa and Asia. For the last two decades, his major clients and business associations have been the 
            UNITED NATIONS, UNICEF, UNDP, UNMISS, GTZ, and other private and humanitarian organizations (NGOs, INGOs). 
            Mr. Padhya learned from past mistakes but never gave up and further expanded in East Asia (Cambodia) in 
            Education and Real-Estate sector. Mr. Padhya's desire continued to do something in a Afghanistan nation in 
            Central Asia and South Asia He continued his investment in Real-Estate, and the Cable.
          
             |||||||||| <br/><br/>Mr. Padhya started in Africa as Energy Solutions (Solar, electric, generator: supplier, repair & maintenance, 
            and sustainability) where no power supply exists, and the temperature exceeds to degrees. Mr. Padhya is 
            currently the Chief Executive Officer of JSM Group of Companies for Africa and Asia. He has expanded his 
            partnership agreements with a Europe-based global energy company and looking forward to the new 
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default SolarPanels;
