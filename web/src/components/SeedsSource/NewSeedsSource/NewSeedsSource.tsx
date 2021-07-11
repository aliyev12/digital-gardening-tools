import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import SeedsSourceForm from 'src/components/SeedsSource/SeedsSourceForm'

const CREATE_SEEDS_SOURCE_MUTATION = gql`
  mutation CreateSeedsSourceMutation($input: CreateSeedsSourceInput!) {
    createSeedsSource(input: $input) {
      id
    }
  }
`

const NewSeedsSource = () => {
  const [createSeedsSource, { loading, error }] = useMutation(
    CREATE_SEEDS_SOURCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('SeedsSource created')
        navigate(routes.seedsSources())
      },
    }
  )

  const onSave = (input) => {
    createSeedsSource({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New SeedsSource</h2>
      </header>
      <div className="rw-segment-main">
        <SeedsSourceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSeedsSource
