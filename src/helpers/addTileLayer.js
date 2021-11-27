export const addTileLayer = (map) => {
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGltYXNzc3BiIiwiYSI6ImNrd2hydGtrbDBpOHEycG93NDBvNzV5d2kifQ.KEbMICnofYJZhD4-dxrzsQ",
    {
      attribution: `Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="https://github.com/dimassspb">Dmitrii Isakov</a>.`,
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      // accessToken:
      //   "pk.eyJ1IjoiZGltYXNzc3BiIiwiYSI6ImNrd2hydGtrbDBpOHEycG93NDBvNzV5d2kifQ.KEbMICnofYJZhD4-dxrzsQ",
    },
  ).addTo(map);
};
