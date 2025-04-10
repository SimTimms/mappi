export const validateLocationName = (locationName: string): boolean => {
  const isValidLocationName = /^[a-zA-Z\s]+$/.test(locationName);
  if (!isValidLocationName || !locationName) {
    return false;
  }

  return true;
};
