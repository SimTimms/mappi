# MAPPI Application

## Overview

The MAPPI application consists of a front-end and a back-end (MAPPI API) that work together to provide map-related services. The front-end is built using React and Vite, while the back-end is a Node.js application using GraphQL.

## Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)

## API Environment Variables

The application uses the following environment variables, which should be defined in a `.env` file at the root of the project:

- **PORT**: The PORT number
- **REDIS_URI**: The URL for a REDIS instance, used for caching responses.
- **WEATHER_API_KEY**: The API Key for the https://www.weatherapi.com/ service

## UI Environment Variables

The application uses the following environment variables, which should be defined in a `.env` file at the root of the project:

- **VITE_GOOGLE_API_KEY**: The Google API key used for accessing Google services.
- **VITE_API_URL**: The URL for the Node API server, typically `http://localhost:3001`.

## Running the Front-End

1. **Install Dependencies**: Navigate to the root directory of the project and run:

   ```bash
   npm install
   ```

2. **Start the Development Server**: Run the following command to start the Vite development server:

   ```bash
   npm run dev
   ```

   This will start the front-end on the default Vite port, usually `http://localhost:3000`.

## Running the Back-End (MAPPI API)

1. **Navigate to the Back-End Directory**: Change to the `mappi-api` directory:

   ```bash
   cd mappi-api
   ```

2. **Install Dependencies**: Run the following command to install the necessary packages:

   ```bash
   npm install
   ```

3. **Start the Development Server**: Use the following command to start the back-end server with `nodemon` for automatic restarts on file changes:

   ```bash
   npm run dev
   ```

   This will start the back-end server on `http://localhost:3001`.

## Building for Production

### Front-End

To build the front-end for production, run:

```bash
npm run build
```

### Back-End

To build the back-end, run:

```bash
npm run build
```

Then, to start the production server, use:

```bash
npm start
```

## Testing

To run tests for the front-end, use:

```bash
npm run test
```

## Author

Tim Simms
