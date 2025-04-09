import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CITIES } from "./queries/getCities"; // Assuming your query is exported

const QueryResult: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data.getCities.length === 0) return <p>No Results</p>;
  return (
    <div>
      {data.getCities.map((city: any) => {
        const cityDetails: { name: string; lonlat: google.maps.LatLngLiteral } =
          {
            name: city.cityName,
            lonlat: city.position,
          };

        return <>{cityDetails.name}</>;
      })}
    </div>
  );
};

export default QueryResult;
