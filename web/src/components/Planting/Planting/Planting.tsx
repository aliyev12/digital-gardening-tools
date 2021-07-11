import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PLANTING_MUTATION = gql`
  mutation DeletePlantingMutation($id: String!) {
    deletePlanting(id: $id) {
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

const Planting = ({ planting }) => {
  const [deletePlanting] = useMutation(DELETE_PLANTING_MUTATION, {
    onCompleted: () => {
      toast.success('Planting deleted')
      navigate(routes.plantings())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete planting ' + id + '?')) {
      deletePlanting({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Planting {planting.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{planting.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{planting.name}</td>
            </tr>
            <tr>
              <th>Date planted</th>
              <td>{timeTag(planting.datePlanted)}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{planting.notes}</td>
            </tr>
            <tr>
              <th>Is succession</th>
              <td>{checkboxInputTag(planting.isSuccession)}</td>
            </tr>
            <tr>
              <th>Succession period</th>
              <td>{planting.successionPeriod}</td>
            </tr>
            <tr>
              <th>Plant variety id</th>
              <td>{planting.plantVarietyId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlanting({ id: planting.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(planting.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Planting
