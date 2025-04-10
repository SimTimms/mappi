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

export type WeatherAPIResponseType = {
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

export type TideAPIResponseType = {
  forecast: {
    forecastday: [
      {
        day: {
          tides: {
            tide: {
              tide_type: string;
              tide_height_mt: string;
              tide_time: string;
            }[];
          }[];
        };
      },
    ];
  };
};
