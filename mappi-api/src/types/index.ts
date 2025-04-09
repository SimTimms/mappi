export type CoordinateType = {
  type: "Point";
  coordinates: [number, number];
};

export type CityType = {
  _id: "1";
  cityName: "Test Town";
  coordinates: CoordinateType;
};
