// backend/server.js
const { ApolloServer, gql } = require('apollo-server');
const fetch = require('node-fetch'); // For fetching Monad RPC data if needed

// GraphQL type definitions
const typeDefs = gql`
  type BlockDetails {
    blockNumber: Int
    timestamp: String
    tps: Int
    blockTime: Int
    gasPrice: Int
    merkleRoot: String
  }
  
  type SimulationResult {
    blockNumber: Int
    originalState: String
    simulatedState: String
    differences: String
  }
  
  type Query {
    blockDetails(blockNumber: Int!): BlockDetails
  }
  
  type Mutation {
    simulate(blockNumber: Int!, modifications: String!): SimulationResult
  }
`;

// Resolver implementations
const resolvers = {
  Query: {
    blockDetails: async (_, { blockNumber }) => {
      // Integrate with Monad RPC here for real data
      return {
        blockNumber,
        timestamp: new Date().toISOString(),
        tps: 9800,
        blockTime: 1000,
        gasPrice: 50,
        merkleRoot: "0xabc123..."
      };
    }
  },
  Mutation: {
    simulate: async (_, { blockNumber, modifications }) => {
      // Apply simulation logic here based on modifications
      return {
        blockNumber,
        originalState: "Balance: 1000, TxCount: 50",
        simulatedState: "Balance: 1050, TxCount: 52",
        differences: "Balance +50, TxCount +2"
      };
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`GraphQL API running at ${url}`);
});
