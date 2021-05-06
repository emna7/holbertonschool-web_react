import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
        { this.context.user.isLoggedIn ?
          <p id="conctacUs"><a>Contact us</a></p> :
          <></> }
      </footer>
    );
  }
}

Footer.contextType = AppContext;

export default Footer;
