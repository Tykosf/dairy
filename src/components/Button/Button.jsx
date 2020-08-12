import React from 'react'

import './button.scss'

const defaultProps = {
  className: 'btn',
  disabled: false
}

const Button = ({ className, children, onClick, disabled }) => (
  <button className={className} onClick={onClick} disabled={disabled}>
    {children}
  </button>
)

Button.defaultProps = defaultProps

export default Button