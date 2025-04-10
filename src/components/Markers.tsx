import React from "react";
import { Marker } from "@react-google-maps/api";
import useWeatherData from "../hooks/useWeatherData";
import { MarkerType, DataContextType } from "../types";
import DataContext from "../context/DataContext";
import { useContext } from "react";
import handleMarkerClick from "../utils/handleMarkerClick";

interface MarkersProps {
  locationName: string;
}
const Markers: React.FC<MarkersProps> = ({ locationName }: MarkersProps) => {
  const dataContext = useContext(DataContext) as DataContextType;
  const markerData: MarkerType | null = useWeatherData(locationName);
  if (!markerData) return null;

  return (
    <Marker
      position={markerData.position}
      title={markerData.title}
      icon={{
        url: markerData.icon || "",
      }}
      onClick={() => handleMarkerClick(dataContext, markerData)}
    />
  );
};

export default Markers;
