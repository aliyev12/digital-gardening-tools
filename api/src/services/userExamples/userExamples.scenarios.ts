import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { email: 'String5368595' },
    two: { email: 'String9754866' },
  },
})

export type StandardScenario = typeof standard
