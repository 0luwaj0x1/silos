import React from 'react';
import ReactDOM from 'react-dom';

import { modalContainer, modalContent, span}  from './styles';


const Modal = () => {

  return (
    ReactDOM.createPortal(
      <div className="modal">
          <div style={modalContainer}>
              <div style={modalContent}>
                <span onClick={ props.close } style={span}>&times;</span>
                { props.children }
              </div>
          </div>
      </div>,
      document.querySelector('#modal')
    )
  );
}


export default Modal;