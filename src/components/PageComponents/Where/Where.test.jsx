import { render } from '@solidjs/testing-library'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Where from './Where'

// Mock google maps
const mockMap = vi.fn()
beforeEach(() => {
  vi.stubGlobal('google', {
    maps: {
      Map: mockMap,
    },
  })
  mockMap.mockClear()
})

describe('Where', () => {
  it('should render the where section', () => {
    const { container } = render(() => <Where />)
    const whereElement = container.querySelector('#where')
    expect(whereElement).toBeInTheDocument()
  })

  it('should initialize google map on mount', () => {
    render(() => <Where />)
    expect(mockMap).toHaveBeenCalled()
  })
})
