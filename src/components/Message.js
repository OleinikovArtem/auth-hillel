import React from 'react'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import { Button } from '@material-ui/core';

export const Message = ({ type = 'success', text, onClose }) => {
  let icon
  switch (type) {
    case 'error':
      icon = <CheckCircleOutlineIcon />
      break;
    default:
      icon = <CheckCircleOutlineIcon />
      break;
  }
  return (
    <div className={`Message Message__${type}`}>
      {icon}
      <p className='Message__text'>{text}</p>
      <Button onClick={onClose}>
        <ClearOutlinedIcon />
      </Button>
    </div>
  )
}
