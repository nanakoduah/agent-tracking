class GoogleMaps {
  setGoogleMapsTag = apiKey => {
    const gMapScript = document.createElement('script');

    gMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    gMapScript.id = 'gMapScript';
    gMapScript.type = 'text/javascript';

    document.head.appendChild(gMapScript);
  };
}

export default new GoogleMaps();
