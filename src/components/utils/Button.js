import React from 'react';
import { Button } from '@material-ui/core';

import TicketIcon from '../../resources/images/icons/ticket.png';

const ButtonUtil = (props) => {
  const {text, bck, color, link} = props;
  return (
    <Button
      href={link}
      variant="contained"
      size="small"
      style={{
        background: bck,
        color: color
      }}
    >
      <img src={TicketIcon} alt="icon_button" className="iconImage"/>
      {text}
    </Button>
  )
};

export default ButtonUtil;
