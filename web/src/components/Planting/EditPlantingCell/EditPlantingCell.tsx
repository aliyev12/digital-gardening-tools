import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PlantingForm from 'src/components/Planting/PlantingForm'

export const QUERY = gql`
  query FindPlantingById($id: String!) {
    planting: planting(id: $id) {
      id
      name
      datePlanted
      notes
      isSuccession
      successionPeriod
      plantVarietyId
    }
  }
`
const UPDATE_PLANTING_MUTATION = gql`
  mutation UpdatePlantingMutation($id: String!, $input: UpdatePlantingInput!) {
    updatePlanting(id: $id, input: $input) {
      id
      name
      datePlanted
      notes
      isSuccession
      successionPeriod
      plantVarietyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ planting }) => {
  const [updatePlanting, { loading, error }] = useMutation(
    UPDATE_PLANTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Planting updated')
        navigate(routes.plantings())
      },
    }
  )

  const onSave = (input, id) => {
    updatePlanting({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Planting {planting.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlantingForm
          planting={planting}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
