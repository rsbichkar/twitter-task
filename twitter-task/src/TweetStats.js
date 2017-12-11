// Tweetstat.js: Statistics for Tweet
// Todo: Proper Characters/images for replies and retweets to be used
//       Use Material UI components for various elements

import React from 'react';

class TweetStats extends React.Component {
  render() {
    return (
      <table className='TweetStats'>
        <tbody>
          <tr>
            <td>
              <a href='#'>{String.fromCharCode('&xf09f92ac')} {this.props.tweet.replies}</a>
            </td>
            <td>
              <a href='#'>{String.fromCharCode('&xe09f92ac')} {this.props.tweet.retweets}</a>
            </td>
            <td><a href='#'><b>{String.fromCharCode('9825')}</b> {this.props.tweet.likes}</a>
            </td>
            <td><a href='#'>{String.fromCharCode('9993')} </a></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TweetStats;
