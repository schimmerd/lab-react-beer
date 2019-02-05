import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  }
});

class FloatingAction extends Component {
  constructor() {
    super()
    this.state = { 
     }
  }

  handleSubmit() {
    window.scrollTo(0, 0)
  }
    
    render() { 
      return (  
      <div>
        <Fab 
          color="secondary" 
          variant="extended" 
          style={{backgroundColor: 'rgb(33, 150, 243)', position: 'fixed', zIndex: 200, top: 30, marginLeft: '18rem'}}
          aria-label="Top"
          onClick={this.handleSubmit.bind(this)}
          className={styles.fab}>
          <NavigationIcon  />
        </Fab>
      </div>
    )
  }
}
 
FloatingAction.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(FloatingAction);