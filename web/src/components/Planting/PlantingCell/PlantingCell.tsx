import Planting from 'src/components/Planting/Planting'

export const QUERY = gql`
  query FindPlantingById($id: String!) {
    planting: planting(id: $id) {
      id
      name
      datePlanted
      notes
      isSuccession
      successionPeriod
      plantVarietyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Planting not found</div>

export const Success = ({ planting }) => {
  return <Planting planting={planting} />
}
