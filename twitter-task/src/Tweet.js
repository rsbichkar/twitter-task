// Tweet.js: Display a single Tweet
// Todo: Use Material UI components for various elements

import React from 'react';
import styles from './App.css';
import TweetLink from './TweetLink';
import TweetStats from './TweetStats';

class Tweet extends React.Component {
  render() {
    // todo: handle multiple tags in reply to array using map
    let replyTo = (this.props.tweet.replyTo !== '') ?
            <span className="ReplyTo">Replying to {this.props.tweet.replyTo}</span> :
            '';

    let tweetLink = (this.props.tweet.tweetLink.title !== '') ?
          <span><TweetLink tweetLink = {this.props.tweet.tweetLink} /></span> :
          '';

    return (
      <div className="Tweet">
        <table>
          <tbody>
            <tr>
              <td className="TweetLogoCell">
                <img className="TweetLogo"
                  src={this.props.tweet.tweetLogoImage}
                  alt="Tweet Logo" />
              </td>
              <td>
                <p>
                  <a href="#"> <b>{this.props.tweet.name}</b></a>
                    <a href="#" className="TweetTag"> {this.props.tweet.tag}</a>
                    <span className="TweetTime"> - {this.props.tweet.time}
                  </span>
                </p>
                {replyTo}
                <p dangerouslySetInnerHTML={{ __html: this.props.tweet.message }}></p>
                {tweetLink}
                <TweetStats tweet={this.props.tweet} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tweet;
