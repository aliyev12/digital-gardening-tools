import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import SeedsSourceForm from 'src/components/SeedsSource/SeedsSourceForm'

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
const UPDATE_SEEDS_SOURCE_MUTATION = gql`
  mutation UpdateSeedsSourceMutation(
    $id: String!
    $input: UpdateSeedsSourceInput!
  ) {
    updateSeedsSource(id: $id, input: $input) {
      id
      isWeb
      url
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ seedsSource }) => {
  const [updateSeedsSource, { loading, error }] = useMutation(
    UPDATE_SEEDS_SOURCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('SeedsSource updated')
        navigate(routes.seedsSources())
      },
    }
  )

  const onSave = (input, id) => {
    updateSeedsSource({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit SeedsSource {seedsSource.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SeedsSourceForm
          seedsSource={seedsSource}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
