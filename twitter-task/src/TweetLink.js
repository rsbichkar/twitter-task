// TweetLink,js: Link box embedded in a Tweet
// todo: Use Material UI components for various elements

import React from 'react';

class TweetLink extends React.Component {
  render() {
    let img = (this.props.tweetLink.image !== '') ?
        <img className="TweetLinkImage"
          src={this.props.tweetLink.image}
          alt="Tweet Link"/> : '';

    return (
      <a href="#">
        <div className="TweetLink">
          <table className="TweetLinkTable">
            <tbody>
              <tr>
                <td className="TweetLinkImgCell"> {img} </td>
                <td className="TweetLinkTextCell">
                  <div className="TweetLinkText">
                    <b className="TweetLinkTitle">{this.props.tweetLink.title}</b><br />
                    <p dangerouslySetInnerHTML={{ __html: this.props.tweetLink.text }}></p>
                    <p className="TweetLinkSite">{this.props.tweetLink.site}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </a>
    );
  }
}

export default TweetLink;
