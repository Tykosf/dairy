import React from 'react'

import Container from '../Container/Container'
import TextInput from '../Fields/TextInput/TextInput'

export const Settings = ({ commentAddKeyCode, commentKeyChange }) => (
  <Container>
    <TextInput  
      label='Add comment key'
      type='text'
      value={String(commentAddKeyCode)}
      onChange={(event) => commentKeyChange(Number(event.target.value.trim()))}
      placeholder='Please fill this with text off what save hotkey you want'
    />
  </Container>
)