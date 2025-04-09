import { MarkerType } from "../types/index";

export const center: google.maps.LatLngLiteral = {
  lat: 51.5074, // Latitude for the center (e.g., London)
  lng: -0.1278, // Longitude for the center
};

export const defaultMarker: MarkerType = {
  position: center,
  icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  title: "Default Marker",
  label: {
    text: "Default Label",
    color: "#000000",
    fontSize: "16px",
  },
  draggable: false,
};
