const typeDefs = `#graphql

############################
### GEO SCHEMA
############################

    input GeoJSONInput {
        type: String!
        coordinates: [Float!]!
    }
   
    type GeoJSON{
        type: String!
        coordinates: [Float!]!
    }

############################
### CITY SCHEMA
############################

    type City{
        _id: ID!
        cityName: String!
        coordinates: GeoJSON!
    }

############################
### QUERIES
############################

    type Query{
        getCities:[City]
    }
        
`;
export default typeDefs;
