import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <span className="navbar-brand">Puppy Daycare</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <button id="navToBio" className="btn btn-dark" onClick={this.logoutClickEvent}>Logout</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
