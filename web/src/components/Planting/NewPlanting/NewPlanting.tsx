import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PlantingForm from 'src/components/Planting/PlantingForm'

const CREATE_PLANTING_MUTATION = gql`
  mutation CreatePlantingMutation($input: CreatePlantingInput!) {
    createPlanting(input: $input) {
      id
    }
  }
`

const NewPlanting = () => {
  const [createPlanting, { loading, error }] = useMutation(
    CREATE_PLANTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Planting created')
        navigate(routes.plantings())
      },
    }
  )

  const onSave = (input) => {
    createPlanting({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Planting</h2>
      </header>
      <div className="rw-segment-main">
        <PlantingForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPlanting
