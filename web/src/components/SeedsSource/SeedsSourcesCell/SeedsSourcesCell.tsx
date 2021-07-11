import { Link, routes } from '@redwoodjs/router'

import SeedsSources from 'src/components/SeedsSource/SeedsSources'

export const QUERY = gql`
  query SEEDS_SOURCES {
    seedsSources {
      id
      isWeb
      url
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No seedsSources yet. '}
      <Link to={routes.newSeedsSource()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ seedsSources }) => {
  return <SeedsSources seedsSources={seedsSources} />
}
