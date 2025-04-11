# MAPPI API

MAPPI API is a GraphQL-based API service that provides weather and tide information for specified locations. It uses Redis for caching to improve performance and reduce external API calls.

## Features

- Weather information retrieval
- Tide data for coastal locations
- GeoJSON-based location handling
- Redis caching for improved performance
- GraphQL API for flexible querying

## Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)
- Redis server (for caching)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3001
REDIS_URL=redis://localhost:6379
WEATHER_API_KEY=https://www.weatherapi.com/
```

## Installation

1. Clone the repository
2. Navigate to the `mappi-api` directory
3. Install dependencies:

```bash
npm install
```

## Running the API

### Development Mode

```bash
npm run dev
```

This will start the server with nodemon for automatic restarts on file changes.

### Production Mode

```bash
npm run build
npm start
```

The API will be available at `http://localhost:3001` by default.

## API Documentation

### GraphQL Playground

Once the server is running, you can access the GraphQL Playground at `http://localhost:3001` to interact with the API and explore the schema.

### Available Queries

#### Get Weather Information

```graphql
query GetWeather($locationName: String!) {
  getWeather(locationName: $locationName) {
    weatherType
    icon
    coordinates {
      type
      coordinates
    }
    tide {
      tide_type
      tide_height_mt
      tide_time
    }
  }
}
```

#### Query Variables

```json
{
  "locationName": "Sydney, Australia"
}
```

## Error Handling

The API returns appropriate error messages for:

- Invalid location names
- Service unavailability
- Invalid queries
- Server errors

## Caching

The API implements Redis caching to:

- Reduce external API calls
- Improve response times
- Handle rate limiting

## Author

Tim Simms
