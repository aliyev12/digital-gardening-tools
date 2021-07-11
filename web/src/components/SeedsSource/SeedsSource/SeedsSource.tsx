import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_SEEDS_SOURCE_MUTATION = gql`
  mutation DeleteSeedsSourceMutation($id: String!) {
    deleteSeedsSource(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const SeedsSource = ({ seedsSource }) => {
  const [deleteSeedsSource] = useMutation(DELETE_SEEDS_SOURCE_MUTATION, {
    onCompleted: () => {
      toast.success('SeedsSource deleted')
      navigate(routes.seedsSources())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete seedsSource ' + id + '?')) {
      deleteSeedsSource({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            SeedsSource {seedsSource.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{seedsSource.id}</td>
            </tr>
            <tr>
              <th>Is web</th>
              <td>{checkboxInputTag(seedsSource.isWeb)}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{seedsSource.url}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{seedsSource.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(seedsSource.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSeedsSource({ id: seedsSource.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(seedsSource.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default SeedsSource
