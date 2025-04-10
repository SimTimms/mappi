const lonLatToPosition = (coordinates: [number, number]) => {
  return {
    lat: coordinates[0],
    lng: coordinates[1],
  };
};

export default lonLatToPosition;
