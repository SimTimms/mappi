import "./DataPanel.css";
import { useContext } from "react";
import { DataContextType } from "../../types";
import DataContext from "../../context/DataContext";

const DataPanel: React.FC = () => {
  const dataContextValue = useContext(DataContext) as DataContextType;
  console.log(dataContextValue);
  return (
    <div
      className={`data-panel ${
        dataContextValue.dataContext && "data-panel-active"
      }`}
    >
      <section>
        <h3>Weather</h3>
        <div className="weather-section">
          <img src={dataContextValue.dataContext?.icon} />
          <h4> {dataContextValue.dataContext?.weatherType}</h4>
        </div>
      </section>
      <section>
        <h3>Tides</h3>
        <ul>
          {dataContextValue.dataContext?.tide.map((tide, index) => {
            return (
              <li
                key={`tide-${index}`}
              >{`${tide.tide_height_mt}m - ${tide.tide_type} - ${tide.tide_time}`}</li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default DataPanel;
