import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

interface MapProps {
  children?: React.ReactNode;
  mapContainerStyle?: React.CSSProperties;
  center: google.maps.LatLngLiteral;
  apiKey: string;
  zoom?: number;
}

const Map: React.FC<MapProps> = ({
  children,
  mapContainerStyle,
  center,
  apiKey,
  zoom = 10,
}: MapProps) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
      >
        {children}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
