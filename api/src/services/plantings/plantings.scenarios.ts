import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PlantingCreateArgs>({
  planting: {
    one: {
      name: 'String',
      datePlanted: '2021-07-10T21:52:46Z',
      variety: { create: { name: 'String', seedsSource: { create: {} } } },
    },
    two: {
      name: 'String',
      datePlanted: '2021-07-10T21:52:46Z',
      variety: { create: { name: 'String', seedsSource: { create: {} } } },
    },
  },
})

export type StandardScenario = typeof standard
