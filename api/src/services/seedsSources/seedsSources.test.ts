import {
  seedsSources,
  seedsSource,
  createSeedsSource,
  updateSeedsSource,
  deleteSeedsSource,
} from './seedsSources'
import type { StandardScenario } from './seedsSources.scenarios'

describe('seedsSources', () => {
  scenario('returns all seedsSources', async (scenario: StandardScenario) => {
    const result = await seedsSources()

    expect(result.length).toEqual(Object.keys(scenario.seedsSource).length)
  })

  scenario(
    'returns a single seedsSource',
    async (scenario: StandardScenario) => {
      const result = await seedsSource({ id: scenario.seedsSource.one.id })

      expect(result).toEqual(scenario.seedsSource.one)
    }
  )

  scenario('deletes a seedsSource', async (scenario: StandardScenario) => {
    const original = await deleteSeedsSource({
      id: scenario.seedsSource.one.id,
    })
    const result = await seedsSource({ id: original.id })

    expect(result).toEqual(null)
  })
})
