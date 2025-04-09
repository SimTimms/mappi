import React from "react";
import { Marker } from "@react-google-maps/api";

interface MarkerComponentProps {
  position: google.maps.LatLngLiteral;
}
const MarkerComponent: React.FC<MarkerComponentProps> = ({
  position,
  ...props
}: MarkerComponentProps) => {
  return <Marker position={position} {...props} />;
};

export default MarkerComponent;
