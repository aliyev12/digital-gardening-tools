import { render } from '@redwoodjs/testing'

import Tools from './Tools'

describe('Tools', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tools />)
    }).not.toThrow()
  })
})
