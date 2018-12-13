import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { scroller } from 'react-scroll';
import { element } from 'prop-types';

const styles = {
  drawerStyles: {
    backgroundColor: 'rgba(27, 51, 80, 0.8)'
  }

}

const SideDrawer = (props) => {
  const { classes } = props;
  const scrollToItem = (element) => {
    const offSet = {
      highlights: -130,
      venueinfo: -87,
      pricing: -88,
      location: -88
    };
    scroller.scrollTo(element, {
      duration: 1450,
      smooth: true,
      delay: 110,
      offset: offSet[element]   
    });
    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
      className={classes.drawerStyles}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToItem('countdown')}>
          Venue Countdown
        </ListItem>
        <ListItem button onClick={() => scrollToItem('venueinfo')}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => scrollToItem('highlights')}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToItem('pricing')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToItem('location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  )
};

export default withStyles(styles)(SideDrawer);