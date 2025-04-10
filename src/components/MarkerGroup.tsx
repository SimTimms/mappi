import React from "react";
import Markers from "./Markers";

interface MarkerGroupProps {
  locations: string[];
}
const MarkerGroup: React.FC<MarkerGroupProps> = ({
  locations,
}: MarkerGroupProps) => {
  return locations.map((location, index) => {
    return <Markers locationName={location} key={`marker-${index}`} />;
  });
};

export default MarkerGroup;
