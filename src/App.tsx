import "./App.css";
import Map from "./component/Map";
import { mapContainerStyle } from "./styles/mapContainerStyle";
import { center } from "./data/defaultValues";

function App() {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  return (
    <div className="app">
      <Map
        apiKey={googleMapsApiKey}
        center={center}
        mapContainerStyle={mapContainerStyle}
      />
    </div>
  );
}

export default App;
