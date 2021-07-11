import { Link, routes } from '@redwoodjs/router'

import PlantVarieties from 'src/components/PlantVariety/PlantVarieties'

export const QUERY = gql`
  query PLANT_VARIETIES {
    plantVarieties {
      id
      name
      description
      seedsSourceId
      daysToMaturity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No plantVarieties yet. '}
      <Link to={routes.newPlantVariety()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ plantVarieties }) => {
  return <PlantVarieties plantVarieties={plantVarieties} />
}
