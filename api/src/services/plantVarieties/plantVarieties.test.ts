import {
  plantVarieties,
  plantVariety,
  createPlantVariety,
  updatePlantVariety,
  deletePlantVariety,
} from './plantVarieties'
import type { StandardScenario } from './plantVarieties.scenarios'

describe('plantVarieties', () => {
  scenario('returns all plantVarieties', async (scenario: StandardScenario) => {
    const result = await plantVarieties()

    expect(result.length).toEqual(Object.keys(scenario.plantVariety).length)
  })

  scenario(
    'returns a single plantVariety',
    async (scenario: StandardScenario) => {
      const result = await plantVariety({ id: scenario.plantVariety.one.id })

      expect(result).toEqual(scenario.plantVariety.one)
    }
  )

  scenario('creates a plantVariety', async (scenario: StandardScenario) => {
    const result = await createPlantVariety({
      input: {
        name: 'String',
        seedsSourceId: scenario.plantVariety.two.seedsSourceId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.seedsSourceId).toEqual(
      scenario.plantVariety.two.seedsSourceId
    )
  })

  scenario('updates a plantVariety', async (scenario: StandardScenario) => {
    const original = await plantVariety({ id: scenario.plantVariety.one.id })
    const result = await updatePlantVariety({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a plantVariety', async (scenario: StandardScenario) => {
    const original = await deletePlantVariety({
      id: scenario.plantVariety.one.id,
    })
    const result = await plantVariety({ id: original.id })

    expect(result).toEqual(null)
  })
})
