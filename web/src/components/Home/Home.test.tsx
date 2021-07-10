import { render } from '@redwoodjs/testing'

import Home from './Home'

describe('Home', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Home />)
    }).not.toThrow()
  })
})
