// App.js: Main applcation file. Displays Tweet timeline
// Todo: Add AppBar, Search and other missing components

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppMenu from './AppMenu';

import Tweets from './Tweets';
import User from './User';
import tweetArr from './TweetData';
import userData from './UserData';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    width: 500,
    color: theme.palette.text.secondary,
  },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <AppMenu user={userData} />
        </Grid>
        <Grid item xs={3}>
          <div class="UserData"><User user={userData} /></div>
        </Grid>
        <Grid item xs={7}>
          <div class="TweetCol"><Tweets tweet={tweetArr}/></div>
        </Grid>
      </Grid>
    );

  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
