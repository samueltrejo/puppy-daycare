import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Navbar extends React.Component {
  logoutClickEvent = (event) => {
    event.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="Navbar">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <span className="navbar-brand">Puppy Daycare</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                {authed ? (
                  <div className="navbar-nav">
                    <button type="dark" className="btn btn-dark" data-toggle="modal" data-target="#add-walk-form">Add Walk</button>
                    <button className="btn btn-dark" onClick={this.logoutClickEvent}>Logout</button>
                  </div>
                ) : (<div className="navbar-nav"></div>)}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
