import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PlantVarietyForm from 'src/components/PlantVariety/PlantVarietyForm'

const CREATE_PLANT_VARIETY_MUTATION = gql`
  mutation CreatePlantVarietyMutation($input: CreatePlantVarietyInput!) {
    createPlantVariety(input: $input) {
      id
    }
  }
`

const NewPlantVariety = () => {
  const [createPlantVariety, { loading, error }] = useMutation(
    CREATE_PLANT_VARIETY_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlantVariety created')
        navigate(routes.plantVarieties())
      },
    }
  )

  const onSave = (input) => {
    createPlantVariety({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PlantVariety</h2>
      </header>
      <div className="rw-segment-main">
        <PlantVarietyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPlantVariety
