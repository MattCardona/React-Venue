import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer.js';

const styles = {
  appBarStyles: {
    boxShadow: 'none',
    padding: '10px 0px'
  }

}

class Header extends React.Component {
  constructor(props){
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      drawerOpen: false,
      headerShow: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    if(window.scrollY > 0){
      this.setState((prevState) => ({
        headerShow: true
      }))
    }else{
      this.setState((prevState) => ({
        headerShow: false
      }))
    }
  }
  toggleDrawer(val) {
    this.setState((prevState) => ({
      drawerOpen: !prevState.drawerOpen
    }))
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <AppBar
          position="fixed"
          style={{backgroundColor: this.state.headerShow ? 'rgb(44, 65, 91)' : 'transparent'}}
          className={classes.appBarStyles}
        >
          <Toolbar>
            <div className="header_logo">
              <div className="font_righteous header_logo_venue">The Venue</div>
              <div className="header_logo_title">Musical Events</div>
            </div>

            <IconButton
              onClick={()=> this.toggleDrawer()}
              color="inherit"
              aria-label="Menu"
            >
               <MenuIcon />
            </IconButton>

            <SideDrawer
              open={this.state.drawerOpen}
              onClose={this.toggleDrawer}
            />

          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header);