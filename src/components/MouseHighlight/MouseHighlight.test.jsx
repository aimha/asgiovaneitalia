import { render } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import MouseHighlight from './MouseHighlight'

// Mock the MouseHighlightClass module
vi.mock('./MouseHighlight.module', () => {
  return {
    default: class MockMouseHighlightClass {
      init = vi.fn()
    },
  }
})

describe('MouseHighlight', () => {
  it('should render the mouse container', () => {
    const { container } = render(() => <MouseHighlight />)
    const mouseContainer = container.querySelector(`[class*="MouseContainer"]`)
    expect(mouseContainer).toBeInTheDocument()
  })

  it('should render the mouse highlight element', () => {
    const { container } = render(() => <MouseHighlight />)
    const mouseHighlight = container.querySelector(`[class*="MouseHighlight"]`)
    expect(mouseHighlight).toBeInTheDocument()
  })
})
