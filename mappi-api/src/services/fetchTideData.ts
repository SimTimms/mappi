import axios from "axios";
import { TideAPIResponseType } from "../types";
import { validateAPIKey } from "../validators";

async function fetchTideData(
  locationName: string,
  apiKey: string
): Promise<TideAPIResponseType> {
  // VALIDATORS
  /////////////////////
  validateAPIKey(apiKey);

  try {
    const tideResponse: { data: TideAPIResponseType } = await axios.get(
      `http://api.weatherapi.com/v1/marine.json?key=${apiKey}&q=${locationName}&days=1`
    );
    return tideResponse.data;
  } catch (error) {
    throw error;
  }
}
export default fetchTideData;
