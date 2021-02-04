import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, userString, copy }) => isShowing ? ReactDOM.createPortal(
  
  <React.Fragment>
    
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
          
          <button type="button" className="modal-copy-button" aria-label="Copy" onClick={copy}>
            <span aria-hidden="true">Copy</span>
          </button>

        </div>
        
        <p>
          {userString}
        </p>
  
      </div>
    </div>
  
  </React.Fragment>, document.body
) : null;

export default Modal;