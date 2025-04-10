import { ErrorMessages } from "../types/enums";

export const validateLocationName = (locationName: string): boolean => {
  const isValidLocationName = /^[a-zA-Z\s]+$/.test(locationName);
  if (!isValidLocationName) {
    throw new Error(ErrorMessages.INVALID_LOCATION_NAME);
  }
  if (!locationName) {
    throw new Error(ErrorMessages.LOCATION_REQUIRED);
  }

  return true;
};

export const validateAPIKey = (apiKey: string): boolean => {
  const isValidAPIKey = apiKey.trim() !== "";

  if (!isValidAPIKey) {
    throw new Error(ErrorMessages.API_KEY_NOT_DEFINED);
  }

  return true;
};
