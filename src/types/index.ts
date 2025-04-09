export type MarkerType = {
  position: google.maps.LatLngLiteral;
  icon?: string;
  title?: string;
  label?: {
    text?: string;
    color?: string;
    fontSize?: string;
  };
  draggable?: boolean;
};
