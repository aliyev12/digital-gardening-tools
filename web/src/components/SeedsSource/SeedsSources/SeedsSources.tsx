import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/SeedsSource/SeedsSourcesCell'

const DELETE_SEEDS_SOURCE_MUTATION = gql`
  mutation DeleteSeedsSourceMutation($id: String!) {
    deleteSeedsSource(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const SeedsSourcesList = ({ seedsSources }) => {
  const [deleteSeedsSource] = useMutation(DELETE_SEEDS_SOURCE_MUTATION, {
    onCompleted: () => {
      toast.success('SeedsSource deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete seedsSource ' + id + '?')) {
      deleteSeedsSource({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Is web</th>
            <th>Url</th>
            <th>Description</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {seedsSources.map((seedsSource) => (
            <tr key={seedsSource.id}>
              <td>{truncate(seedsSource.id)}</td>
              <td>{checkboxInputTag(seedsSource.isWeb)}</td>
              <td>{truncate(seedsSource.url)}</td>
              <td>{truncate(seedsSource.description)}</td>
              <td>{timeTag(seedsSource.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.seedsSource({ id: seedsSource.id })}
                    title={'Show seedsSource ' + seedsSource.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSeedsSource({ id: seedsSource.id })}
                    title={'Edit seedsSource ' + seedsSource.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete seedsSource ' + seedsSource.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(seedsSource.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SeedsSourcesList
