export type CoordinateType = {
  type: "Point";
  coordinates: [number, number];
};

export type WeatherType = {
  weatherType: string;
  coordinates: CoordinateType;
};

export type APIResponseType = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};
