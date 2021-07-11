export const schema = gql`
  type SeedsSource {
    id: String!
    isWeb: Boolean!
    url: String
    description: String
    createdAt: DateTime!
    PlantVariety: [PlantVariety]!
  }

  type Query {
    seedsSources: [SeedsSource!]!
    seedsSource(id: String!): SeedsSource
  }

  input CreateSeedsSourceInput {
    isWeb: Boolean!
    url: String
    description: String
  }

  input UpdateSeedsSourceInput {
    isWeb: Boolean
    url: String
    description: String
  }

  type Mutation {
    createSeedsSource(input: CreateSeedsSourceInput!): SeedsSource!
    updateSeedsSource(id: String!, input: UpdateSeedsSourceInput!): SeedsSource!
    deleteSeedsSource(id: String!): SeedsSource!
  }
`
