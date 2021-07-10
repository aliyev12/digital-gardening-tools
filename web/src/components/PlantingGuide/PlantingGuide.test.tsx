import { render } from '@redwoodjs/testing'

import PlantingGuide from './PlantingGuide'

describe('PlantingGuide', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlantingGuide />)
    }).not.toThrow()
  })
})
