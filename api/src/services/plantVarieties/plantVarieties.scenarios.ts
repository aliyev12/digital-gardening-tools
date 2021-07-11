import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PlantVarietyCreateArgs>({
  plantVariety: {
    one: { name: 'String', seedsSource: { create: {} } },
    two: { name: 'String', seedsSource: { create: {} } },
  },
})

export type StandardScenario = typeof standard
