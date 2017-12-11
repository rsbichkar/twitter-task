import React from 'react';
import Avatar from 'material-ui/Avatar';

class User extends React.Component {
  render() {
    return (

      <div className="User">
        <img className="UserImage"
          src={this.props.user.image}
          alt="User" />
        <table>
          <tbody>
            <tr><td className="BlueBG"></td></tr>
            <tr><td className="UserName">
              {this.props.user.name}
            </td></tr>

            <tr><td className="UserTag">
              {this.props.user.tag}
            </td></tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <td>
                <a href="#">
                  <span className="UserStatHeading">Tweets</span><br />
                  <span className="UserStatValue">{this.props.user.tweets}</span>
                </a>
              </td>

              <td>
                <a href="#">
                  <span className="UserStatHeading">Following</span><br />
                  <span className="UserStatValue">{this.props.user.following}</span>
                </a>
              </td>

              <td>
                <a href="#">
                  <span className="UserStatHeading">Followers</span><br />
                  <span className="UserStatValue">{this.props.user.followers}</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

}

export default User;
