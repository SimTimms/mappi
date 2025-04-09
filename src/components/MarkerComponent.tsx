import React from "react";
import { Marker } from "@react-google-maps/api";
import { MarkerType } from "../types/";

interface MarkerComponentProps {
  markerProps: MarkerType;
}
const MarkerComponent: React.FC<MarkerComponentProps> = ({
  markerProps: { position, icon, title, label, draggable },
}: MarkerComponentProps) => {
  return (
    <Marker
      position={position}
      icon={icon}
      title={title}
      label={{
        text: label?.text || "",
        color: label?.color || "",
        fontSize: label?.fontSize || "12px",
      }}
      draggable={draggable}
    />
  );
};

export default MarkerComponent;
