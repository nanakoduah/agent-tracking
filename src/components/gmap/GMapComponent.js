import React from 'react';
import PropTypes from 'prop-types';

import './GMapComponent.css';

const apiKey = process.env.REACT_APP_GOOGLE_MAP_ID;

const MAP_ID = 'myMap';
const MAP_OPTION = {
  center: { lat: 8.0082, lng: -2.0 },
  zoom: 8
};

class GMapComponent extends React.Component {
  static propTypes = {
    agents: PropTypes.arrayOf(PropTypes.shape())
  };

  map = null;
  markers = [];

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    if (this.map) {
      this.onMapLoad(this.map);
    }
  }

  setMapOnAll(map) {
    this.markers.map(marker => marker.setMap(map));
  }

  onMapLoad = map => {
    const { agents } = this.props;
    this.setMapOnAll(null);
    this.markers = [];

    agents.map(agent => {
      const marker = new window.google.maps.Marker({
        position: agent.location,
        map,
        title: agent.name
      });
      this.markers.push(marker);

      return null;
    });

    return null;
  };

  initMap() {
    if (!window.google) {
      const gMapScript = document.createElement('script');
      gMapScript.type = 'text/javascript';
      gMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;

      document.head.appendChild(gMapScript);

      gMapScript.addEventListener('load', () => {
        this.onScriptLoad();
      });
      return;
    }
    this.onScriptLoad();
  }

  onScriptLoad() {
    this.map = new window.google.maps.Map(
      document.getElementById(MAP_ID),
      MAP_OPTION
    );
    this.onMapLoad(this.map);
  }

  componentWillUnmount() {
    this.map = null;
  }

  render() {
    return <div id={MAP_ID} className="gmap" />;
  }
}

export default GMapComponent;
