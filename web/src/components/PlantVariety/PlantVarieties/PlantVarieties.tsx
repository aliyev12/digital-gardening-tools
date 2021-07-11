import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/PlantVariety/PlantVarietiesCell'

const DELETE_PLANT_VARIETY_MUTATION = gql`
  mutation DeletePlantVarietyMutation($id: String!) {
    deletePlantVariety(id: $id) {
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

const PlantVarietiesList = ({ plantVarieties }) => {
  const [deletePlantVariety] = useMutation(DELETE_PLANT_VARIETY_MUTATION, {
    onCompleted: () => {
      toast.success('PlantVariety deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete plantVariety ' + id + '?')) {
      deletePlantVariety({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Seeds source id</th>
            <th>Days to maturity</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {plantVarieties.map((plantVariety) => (
            <tr key={plantVariety.id}>
              <td>{truncate(plantVariety.id)}</td>
              <td>{truncate(plantVariety.name)}</td>
              <td>{truncate(plantVariety.description)}</td>
              <td>{truncate(plantVariety.seedsSourceId)}</td>
              <td>{truncate(plantVariety.daysToMaturity)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.plantVariety({ id: plantVariety.id })}
                    title={'Show plantVariety ' + plantVariety.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPlantVariety({ id: plantVariety.id })}
                    title={'Edit plantVariety ' + plantVariety.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete plantVariety ' + plantVariety.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(plantVariety.id)}
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

export default PlantVarietiesList
