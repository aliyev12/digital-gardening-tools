import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'
import { UserInputError } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Server side validation goes here 👇
const validate = (input: Prisma.PlantingCreateInput) => {
  // if(!input.name && !input.name.match(/some regex expression/))
  if (!input.name) {
    throw new UserInputError("Can't create new contact", {
      message: {
        email: ['is not formatted like an email address'],
      },
    })
  }
}

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const plantings = () => {
  return db.planting.findMany()
}

export const planting = ({ id }: Prisma.PlantingWhereUniqueInput) => {
  return db.planting.findUnique({
    where: { id },
  })
}

interface CreatePlantingArgs {
  input: Prisma.PlantingCreateInput
}

export const createPlanting = ({ input }: CreatePlantingArgs) => {
  validate(input)
  requireAuth()
  return db.planting.create({
    data: input,
  })
}

interface UpdatePlantingArgs extends Prisma.PlantingWhereUniqueInput {
  input: Prisma.PlantingUpdateInput
}

export const updatePlanting = ({ id, input }: UpdatePlantingArgs) => {
  requireAuth()
  return db.planting.update({
    data: input,
    where: { id },
  })
}

export const deletePlanting = ({ id }: Prisma.PlantingWhereUniqueInput) => {
  requireAuth()
  return db.planting.delete({
    where: { id },
  })
}

export const Planting = {
  variety: (_obj, { root }: ResolverArgs<ReturnType<typeof planting>>) =>
    db.planting.findUnique({ where: { id: root.id } }).variety(),
}
