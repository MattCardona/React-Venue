import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';

const SideDrawer = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose()}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("Featured clicked")}>
          Venue Countdown
        </ListItem>
        <ListItem button onClick={() => console.log("Venue Info clicked")}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => console.log("Highlights clicked")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log("Pricing clicked")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log("Location clicked")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  )
};

export default SideDrawer;