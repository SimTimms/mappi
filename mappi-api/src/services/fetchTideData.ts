import axios from "axios";
import { TideAPIResponseType } from "../types";
import { validateAPIKey } from "../validators";
import { getCachedData, setCachedData } from "../redis/helpers";

const CACHE_EXPIRATION = 3600; // Cache expiration time in seconds (1 hour)

/**
 * Fetch tide data for a given location.
 *
 * @param locationName - The name of the location to fetch tide data for.
 * @param apiKey - The API key for authenticating with the weather API.
 * @returns A promise that resolves to the tide data for the specified location.
 */

async function fetchTideData(
  locationName: string,
  apiKey: string
): Promise<TideAPIResponseType> {
  // VALIDATORS
  validateAPIKey(apiKey);

  // CACHE DATA
  const cacheKey = `tide-data:${locationName}`;
  const cachedData = await getCachedData(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const tideResponse: { data: TideAPIResponseType } = await axios.get(
      `http://api.weatherapi.com/v1/marine.json?key=${apiKey}&q=${locationName}&days=1`
    );

    await setCachedData(
      cacheKey,
      JSON.stringify(tideResponse.data),
      CACHE_EXPIRATION
    );

    return tideResponse.data;
  } catch (error) {
    throw error;
  }
}
export default fetchTideData;
