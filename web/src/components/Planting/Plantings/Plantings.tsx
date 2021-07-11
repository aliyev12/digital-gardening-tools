import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Planting/PlantingsCell'

const DELETE_PLANTING_MUTATION = gql`
  mutation DeletePlantingMutation($id: String!) {
    deletePlanting(id: $id) {
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

const PlantingsList = ({ plantings }) => {
  const [deletePlanting] = useMutation(DELETE_PLANTING_MUTATION, {
    onCompleted: () => {
      toast.success('Planting deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete planting ' + id + '?')) {
      deletePlanting({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Date planted</th>
            <th>Notes</th>
            <th>Is succession</th>
            <th>Succession period</th>
            <th>Plant variety id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {plantings.map((planting) => (
            <tr key={planting.id}>
              <td>{truncate(planting.id)}</td>
              <td>{truncate(planting.name)}</td>
              <td>{timeTag(planting.datePlanted)}</td>
              <td>{truncate(planting.notes)}</td>
              <td>{checkboxInputTag(planting.isSuccession)}</td>
              <td>{truncate(planting.successionPeriod)}</td>
              <td>{truncate(planting.plantVarietyId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.planting({ id: planting.id })}
                    title={'Show planting ' + planting.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPlanting({ id: planting.id })}
                    title={'Edit planting ' + planting.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete planting ' + planting.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(planting.id)}
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

export default PlantingsList
