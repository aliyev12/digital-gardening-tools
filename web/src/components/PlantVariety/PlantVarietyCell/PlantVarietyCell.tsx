import PlantVariety from 'src/components/PlantVariety/PlantVariety'

export const QUERY = gql`
  query FindPlantVarietyById($id: String!) {
    plantVariety: plantVariety(id: $id) {
      id
      name
      description
      seedsSourceId
      daysToMaturity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PlantVariety not found</div>

export const Success = ({ plantVariety }) => {
  return <PlantVariety plantVariety={plantVariety} />
}
