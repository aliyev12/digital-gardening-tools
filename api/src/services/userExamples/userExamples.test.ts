import {
  userExamples,
  userExample,
  createUserExample,
  updateUserExample,
  deleteUserExample,
} from './userExamples'
import type { StandardScenario } from './userExamples.scenarios'

describe('userExamples', () => {
  scenario('returns all userExamples', async (scenario: StandardScenario) => {
    const result = await userExamples()

    expect(result.length).toEqual(Object.keys(scenario.userExample).length)
  })

  scenario(
    'returns a single userExample',
    async (scenario: StandardScenario) => {
      const result = await userExample({ id: scenario.userExample.one.id })

      expect(result).toEqual(scenario.userExample.one)
    }
  )

  scenario('creates a userExample', async () => {
    const result = await createUserExample({
      input: { email: 'String8992753' },
    })

    expect(result.email).toEqual('String8992753')
  })

  scenario('updates a userExample', async (scenario: StandardScenario) => {
    const original = await userExample({ id: scenario.userExample.one.id })
    const result = await updateUserExample({
      id: original.id,
      input: { email: 'String50064802' },
    })

    expect(result.email).toEqual('String50064802')
  })

  scenario('deletes a userExample', async (scenario: StandardScenario) => {
    const original = await deleteUserExample({
      id: scenario.userExample.one.id,
    })
    const result = await userExample({ id: original.id })

    expect(result).toEqual(null)
  })
})
