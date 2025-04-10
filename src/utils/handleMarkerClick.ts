import { MarkerType, DataContextType } from "../types";

const handleMarkerClick: (
  dataContext: DataContextType,
  markerData: MarkerType
) => void = (dataContext: DataContextType, markerData: MarkerType) => {
  console.log(markerData);
  dataContext.setDataContext({
    weatherType: markerData.label?.text || "",
    icon: markerData.icon || "",
    coordinates: {
      type: "Point",
      coordinates: [markerData.position.lat, markerData.position.lng],
    },
    tide: markerData.tide,
  });
};

export default handleMarkerClick;
