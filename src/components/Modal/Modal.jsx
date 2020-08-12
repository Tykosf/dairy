import React from 'react'
import Button from '../Button/Button'

import './modal.css'

const Modal = ({ title, onSave, onClose, children }) => (
  <div className='modal-dialog'>
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>{title || 'Are you sure you want delete this item?'}</h4>
        </div>
        <div className='modal-body'>
          <div className='modal-message'>
            {children}
          </div>
          <div className='modal__bottom-buttons'>
            <Button className='btn btn-cancel' onClick={onClose}>Cancel</Button>
            <Button className='btn' onClick={onSave}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Modal