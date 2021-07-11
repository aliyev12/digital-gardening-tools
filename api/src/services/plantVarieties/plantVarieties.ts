import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const plantVarieties = () => {
  return db.plantVariety.findMany()
}

export const plantVariety = ({ id }: Prisma.PlantVarietyWhereUniqueInput) => {
  return db.plantVariety.findUnique({
    where: { id },
  })
}

interface CreatePlantVarietyArgs {
  input: Prisma.PlantVarietyCreateInput
}

export const createPlantVariety = ({ input }: CreatePlantVarietyArgs) => {
  return db.plantVariety.create({
    data: input,
  })
}

interface UpdatePlantVarietyArgs extends Prisma.PlantVarietyWhereUniqueInput {
  input: Prisma.PlantVarietyUpdateInput
}

export const updatePlantVariety = ({ id, input }: UpdatePlantVarietyArgs) => {
  return db.plantVariety.update({
    data: input,
    where: { id },
  })
}

export const deletePlantVariety = ({
  id,
}: Prisma.PlantVarietyWhereUniqueInput) => {
  return db.plantVariety.delete({
    where: { id },
  })
}

export const PlantVariety = {
  seedsSource: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof plantVariety>>
  ) => db.plantVariety.findUnique({ where: { id: root.id } }).seedsSource(),
  Planting: (_obj, { root }: ResolverArgs<ReturnType<typeof plantVariety>>) =>
    db.plantVariety.findUnique({ where: { id: root.id } }).Planting(),
}
