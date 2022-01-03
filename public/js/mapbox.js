'use strict';

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZHppdWdpc3dlYiIsImEiOiJja3hzenRhYjAzNmgzMnhxa3M3ZXRhOTVyIn0.FC6kMnag54xz0nI4zWLpvQ';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/dziugisweb/ckxszziro7n9416rykl7yjnl4',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
