import { MarkerType } from "../types/index";

export const center: google.maps.LatLngLiteral = {
  lat: 50.8179,
  lng: -0.3729,
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
  tide: [],
};

export const defaultLocations: string[] = [
  "Worthing",
  "Brighton",
  "Shoreham",
  "Littlehampton",
  "London",
  "Paris",
  "Madrid",
];
