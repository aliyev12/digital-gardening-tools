import SeedsSource from 'src/components/SeedsSource/SeedsSource'

export const QUERY = gql`
  query FindSeedsSourceById($id: String!) {
    seedsSource: seedsSource(id: $id) {
      id
      isWeb
      url
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SeedsSource not found</div>

export const Success = ({ seedsSource }) => {
  return <SeedsSource seedsSource={seedsSource} />
}
