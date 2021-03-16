import React, { Component } from 'react';
class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '246207945447-rjde9s6uigavja24jvnt2ohejoe603oo.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuthoButton() {
    if (this.state.isSignedIn === null) {
      return <div>null</div>;
    } else if (this.state.isSignedIn) {
      return (
        <button className='ui red google button '>
          <i className='google icon' /> SignOut
        </button>
      );
    } else {
      return (
        <button className='ui  google button green '>
          <i className='google icon red' /> SignIn
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthoButton()}</div>;
  }
}

export default GoogleAuth;
