export const schema = gql`
  type Planting {
    id: String!
    name: String!
    datePlanted: DateTime!
    notes: String
    isSuccession: Boolean!
    successionPeriod: Int
    variety: PlantVariety!
    plantVarietyId: String!
  }

  type Query {
    plantings: [Planting!]!
    planting(id: String!): Planting
  }

  input CreatePlantingInput {
    name: String!
    datePlanted: DateTime!
    notes: String
    isSuccession: Boolean!
    successionPeriod: Int
    plantVarietyId: String!
  }

  input UpdatePlantingInput {
    name: String
    datePlanted: DateTime
    notes: String
    isSuccession: Boolean
    successionPeriod: Int
    plantVarietyId: String
  }

  type Mutation {
    createPlanting(input: CreatePlantingInput!): Planting!
    updatePlanting(id: String!, input: UpdatePlantingInput!): Planting!
    deletePlanting(id: String!): Planting!
  }
`
