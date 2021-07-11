import {
  plantings,
  planting,
  createPlanting,
  updatePlanting,
  deletePlanting,
} from './plantings'
import type { StandardScenario } from './plantings.scenarios'

describe('plantings', () => {
  scenario('returns all plantings', async (scenario: StandardScenario) => {
    const result = await plantings()

    expect(result.length).toEqual(Object.keys(scenario.planting).length)
  })

  scenario('returns a single planting', async (scenario: StandardScenario) => {
    const result = await planting({ id: scenario.planting.one.id })

    expect(result).toEqual(scenario.planting.one)
  })

  scenario('creates a planting', async (scenario: StandardScenario) => {
    const result = await createPlanting({
      input: {
        name: 'String',
        datePlanted: '2021-07-10T21:52:46Z',
        plantVarietyId: scenario.planting.two.plantVarietyId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.datePlanted).toEqual('2021-07-10T21:52:46Z')
    expect(result.plantVarietyId).toEqual(scenario.planting.two.plantVarietyId)
  })

  scenario('updates a planting', async (scenario: StandardScenario) => {
    const original = await planting({ id: scenario.planting.one.id })
    const result = await updatePlanting({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a planting', async (scenario: StandardScenario) => {
    const original = await deletePlanting({ id: scenario.planting.one.id })
    const result = await planting({ id: original.id })

    expect(result).toEqual(null)
  })
})
