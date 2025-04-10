import { useState } from "react";
import DataContext from "./DataContext";
import { WeatherType } from "../types";

const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dataContext, setDataContext] = useState<WeatherType | null>(null);

  return (
    <DataContext.Provider value={{ dataContext, setDataContext }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
