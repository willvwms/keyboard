import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const Modal = ({ isShowing, toggleModal, userString, handleCopy }) => isShowing ? ReactDOM.createPortal(
  
  <React.Fragment>
    
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
            <span aria-hidden="true">&times;</span>
          </button>

        <Button id="copy_btn_modal" value="Copy" buttonType="copy" userString={userString} handleCopy={handleCopy}/>
        <Button id="copy_btn_modal" value="Copy" buttonType="copy" userString={userString} handleCopy={handleCopy}/>

        </div>
        
        <p>
          {userString}
        </p>
  
      </div>
    </div>
  
  </React.Fragment>, document.getElementById('modal-root')
) : null;

export default Modal;