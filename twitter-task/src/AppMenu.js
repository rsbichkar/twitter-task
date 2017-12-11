import React from 'react';
import AppBar from 'material-ui/AppBar';

class AppMenu extends React.Component {
  render() {
    return (
      <AppBar>
        <table><tbody>
          <tr>
            <td className="AppBarItem">Home</td>
            <td className="AppBarItem">Notifications</td>
            <td className="AppBarItem">Messages</td>
            <td className="AppBarItem">
              <img className="UserImageSmall"
              src={this.props.user.twitter_image}
              alt="Twitter Logo" />
            </td>
            <td className="AppBarItem"><input type="text" name="search" /></td>
            <td className="AppBarItem">
              <img className="UserImageSmall"
                src={this.props.user.image}
                alt={this.props.user.name} />
            </td>
            <td className="AppBarItem">Tweet</td>
          </tr>
        </tbody></table>
      </AppBar>
    );
  }
}

export default AppMenu;
