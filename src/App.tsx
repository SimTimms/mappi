import React, { Suspense } from "react";
import "./App.css";
import { mapContainerStyle } from "./styles/mapContainerStyle";
import { center } from "./data/defaultValues";
import MarkerGroup from "./components/MarkerGroup";
import DataPanel from "./components/DataPanel";
import defaultMapOptions from "./utils/defaultMapOptions";
import DataContextProvider from "./context/DataContextProvider";
import { defaultLocations } from "./data/defaultValues";
const Map = React.lazy(() => import("./components/Map"));

function App() {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  return (
    <DataContextProvider>
      <div className="app">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Map
            apiKey={googleMapsApiKey}
            center={center}
            mapContainerStyle={mapContainerStyle}
            options={defaultMapOptions}
          >
            <MarkerGroup locations={defaultLocations} />
          </Map>
        </Suspense>
        <DataPanel />
      </div>
    </DataContextProvider>
  );
}

export default App;
