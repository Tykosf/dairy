import React from 'react'

import '../field.scss'

const TextInput = ({ id, label, placeholder, type, value, onChange }) => (
  <div className='field'>
    {label && <label className='field__label' htmlFor={`input-field-${id}`}>{label}</label>}
    <input
      id={`input-field-${id}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder || ''}
    />
  </div>
)

export default TextInput