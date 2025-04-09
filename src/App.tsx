import "./App.css";
import Map from "./components/Map";
import MarkerComponent from "./components/MarkerComponent";
import { mapContainerStyle } from "./styles/mapContainerStyle";
import { center, defaultMarker } from "./data/defaultValues";

function App() {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  return (
    <div className="app">
      <Map
        apiKey={googleMapsApiKey}
        center={center}
        mapContainerStyle={mapContainerStyle}
      >
        <MarkerComponent markerProps={defaultMarker} />
      </Map>
    </div>
  );
}

export default App;
