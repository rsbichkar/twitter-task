// Tweets.js: Displays several Tweets
// Todo: Use Material UI components for various elements

import React, { Component } from 'react';

import Tweet from './Tweet';
import tweetArr from './TweetData';

class Tweets extends Component {
  render() {
    return (
      tweetArr.map(function (tweet, index) {
        /* return (
          <div key={index}>
            <MuiThemeProvider>
              <Tweet tweet={tweet}/>
            </MuiThemeProvider>
          </div>
        ); */
        return (
          <div key={index}>
            <Tweet tweet={tweet}/>
          </div>
        );
      })
    );
  }
}

export default Tweets;
