export const schema = gql`
  type PlantVariety {
    id: String!
    name: String!
    description: String
    seedsSource: SeedsSource!
    seedsSourceId: String!
    daysToMaturity: Int
    Planting: [Planting]!
  }

  type Query {
    plantVarieties: [PlantVariety!]!
    plantVariety(id: String!): PlantVariety
  }

  input CreatePlantVarietyInput {
    name: String!
    description: String
    seedsSourceId: String!
    daysToMaturity: Int
  }

  input UpdatePlantVarietyInput {
    name: String
    description: String
    seedsSourceId: String
    daysToMaturity: Int
  }

  type Mutation {
    createPlantVariety(input: CreatePlantVarietyInput!): PlantVariety!
    updatePlantVariety(
      id: String!
      input: UpdatePlantVarietyInput!
    ): PlantVariety!
    deletePlantVariety(id: String!): PlantVariety!
  }
`
