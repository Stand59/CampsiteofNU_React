import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Directory from './DirectoryComponents';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectedCampsite: null
    };
  }

  onCampsiteSelect(campsiteID) {
    this.setState({selectedCampsite: campsiteID });
}


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Nucamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)} />
        <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
      </div>
    );
  }
}

export default Main;