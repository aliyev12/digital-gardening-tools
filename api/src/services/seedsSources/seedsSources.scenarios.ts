import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SeedsSourceCreateArgs>({
  seedsSource: { one: {}, two: {} },
})

export type StandardScenario = typeof standard
