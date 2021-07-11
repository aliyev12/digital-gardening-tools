import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const seedsSources = () => {
  return db.seedsSource.findMany()
}

export const seedsSource = ({ id }: Prisma.SeedsSourceWhereUniqueInput) => {
  return db.seedsSource.findUnique({
    where: { id },
  })
}

interface CreateSeedsSourceArgs {
  input: Prisma.SeedsSourceCreateInput
}

export const createSeedsSource = ({ input }: CreateSeedsSourceArgs) => {
  return db.seedsSource.create({
    data: input,
  })
}

interface UpdateSeedsSourceArgs extends Prisma.SeedsSourceWhereUniqueInput {
  input: Prisma.SeedsSourceUpdateInput
}

export const updateSeedsSource = ({ id, input }: UpdateSeedsSourceArgs) => {
  return db.seedsSource.update({
    data: input,
    where: { id },
  })
}

export const deleteSeedsSource = ({
  id,
}: Prisma.SeedsSourceWhereUniqueInput) => {
  return db.seedsSource.delete({
    where: { id },
  })
}

export const SeedsSource = {
  PlantVariety: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof seedsSource>>
  ) => db.seedsSource.findUnique({ where: { id: root.id } }).PlantVariety(),
}
