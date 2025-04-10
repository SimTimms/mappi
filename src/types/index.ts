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
  tide: {
    tide_type: string;
    tide_height_mt: string;
    tide_time: string;
  }[];
};

export type CoordinateType = {
  type: "Point";
  coordinates: [number, number];
};

export type WeatherType = {
  weatherType: string;
  icon: string;
  coordinates: CoordinateType;
  tide: {
    tide_type: string;
    tide_height_mt: string;
    tide_time: string;
  }[];
};

export type DataContextType = {
  dataContext: WeatherType | null;
  setDataContext: React.Dispatch<React.SetStateAction<WeatherType | null>>;
};
