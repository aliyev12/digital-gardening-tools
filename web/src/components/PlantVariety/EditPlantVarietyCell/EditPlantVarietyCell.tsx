import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PlantVarietyForm from 'src/components/PlantVariety/PlantVarietyForm'

export const QUERY = gql`
  query FindPlantVarietyById($id: String!) {
    plantVariety: plantVariety(id: $id) {
      id
      name
      description
      seedsSourceId
      daysToMaturity
    }
  }
`
const UPDATE_PLANT_VARIETY_MUTATION = gql`
  mutation UpdatePlantVarietyMutation(
    $id: String!
    $input: UpdatePlantVarietyInput!
  ) {
    updatePlantVariety(id: $id, input: $input) {
      id
      name
      description
      seedsSourceId
      daysToMaturity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ plantVariety }) => {
  const [updatePlantVariety, { loading, error }] = useMutation(
    UPDATE_PLANT_VARIETY_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlantVariety updated')
        navigate(routes.plantVarieties())
      },
    }
  )

  const onSave = (input, id) => {
    updatePlantVariety({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PlantVariety {plantVariety.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlantVarietyForm
          plantVariety={plantVariety}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
