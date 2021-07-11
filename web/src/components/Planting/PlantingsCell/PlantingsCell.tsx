import { Link, routes } from '@redwoodjs/router'

import Plantings from 'src/components/Planting/Plantings'

export const QUERY = gql`
  query PLANTINGS {
    plantings {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No plantings yet. '}
      <Link to={routes.newPlanting()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ plantings }) => {
  return <Plantings plantings={plantings} />
}
