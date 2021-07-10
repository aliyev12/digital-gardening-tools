import { render } from '@redwoodjs/testing'

import PlantingGuidePage from './PlantingGuidePage'

describe('PlantingGuidePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlantingGuidePage />)
    }).not.toThrow()
  })
})
