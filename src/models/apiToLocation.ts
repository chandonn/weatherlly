import { GeolocationSearchResultsResponse } from "../types/api";
import { SearchResults } from "../types/data";

export function apiToLocation(response: GeolocationSearchResultsResponse): SearchResults {
  try {
    const searchResults = response.results.map(it => {
      const {
        name,
        latitude,
        longitude,
        country_code,
        timezone,
        country,
      } = it
  
      return {
        name,
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        country_code,
        timezone,
        country,
      }
    })
  
    return searchResults
  } catch (e) {
    return []
  }
}
