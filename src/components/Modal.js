import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const Modal = ({ isShowing, toggleModal, userString, handleCopy }) => isShowing ? ReactDOM.createPortal(
  
  <React.Fragment>
    
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">

        <Button id="copy_btn_modal" value="Copy" buttonType="copy" userString={userString} handleCopy={handleCopy}/>
        <Button id="closeFullScreen" buttonType="toggleModal" userString={userString} toggleModal={toggleModal}/>

        </div>
        
        <div id="screen_in_MODAL" style= {{ "white-space": "pre-line" }} >

            <p >
                {userString}
            </p>

        </div>

      </div>
    </div>
  
  </React.Fragment>, document.getElementById('modal-root')
) : null;

export default Modal;