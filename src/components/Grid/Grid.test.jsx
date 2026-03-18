import { render } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import Grid from './Grid'

// Mock the GridClass module
vi.mock('./Grid.module', () => {
  return {
    default: class MockGridClass {
      init = vi.fn()
    },
  }
})

describe('Grid', () => {
  it('should render the grid container', () => {
    const { container } = render(() => <Grid />)
    const gridElement = container.querySelector('#grid')
    expect(gridElement).toBeInTheDocument()
  })

  it('should have the correct id', () => {
    const { container } = render(() => <Grid />)
    const gridElement = container.querySelector('#grid')
    expect(gridElement.id).toBe('grid')
  })
})
