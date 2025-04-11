# MAPPI Application Design Document

## Technology Stack Overview

### Frontend

- **React**: A modern JavaScript library for building user interfaces

  - Enables efficient UI updates and reusable components

- **TypeScript**: A typed superset of JavaScript

  - Provides static typing to catch errors during development
  - Improves code maintainability and developer experience
  - Enables better IDE support and code completion

- **Vite**: Next-generation frontend build tool

  - Fast development server with hot module replacement
  - Modern development experience with minimal configuration

- **GraphQL Client (@apollo/client)**: For efficient data fetching

  - Provides caching and state management
  - Reduces over-fetching and under-fetching of data

- **@react-google-maps/api**: Google Maps integration
  - Provides React components for Google Maps
  - Handles map interactions and markers

### Backend

- **Node.js**: JavaScript runtime environment

  - Enables JavaScript on the server

- **GraphQL (@apollo/server)**: Query language for APIs

  - Flexible data fetching
  - Strong typing with schema
  - Self-documenting API

- **Redis**: In-memory data store

  - Caching layer for weather and tide data
  - Improves response times
  - Reduces external API calls
  - Handles rate limiting

- **MongoDB**: NoSQL database
  - Flexible schema design
  - Good for geospatial queries
  - Scales well with growing data

## Architecture Decisions

### API Design

- **GraphQL over REST**
  - More efficient data fetching
  - Reduced number of requests
  - Better type safety
  - Self-documenting API

### Caching Strategy

- **Redis Implementation**
  - In-memory caching for fast access
  - TTL (Time To Live) for weather data
  - Prevents excessive external API calls
  - Improves application performance

### Data Flow

1. Client requests weather data for a location
2. Backend checks Redis cache
3. If cache miss, fetches from external weather API
4. Updates Redis cache with new data
5. Returns formatted response to client

## Future Considerations

### Potential Improvements

- Real-time weather updates
- Historical weather data
- More detailed tide information
- Improved Testing on both applications
- E2E testing with Cypress
- Improved error handling across the board
- Use a more secure implementation of Apollo that permits CORS
