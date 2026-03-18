import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import Marquee from './Marquee'

// Mock the MarqueeClass module
vi.mock('./Marquee.module', () => {
  return {
    default: class MockMarqueeClass {
      init = vi.fn()
    },
  }
})

describe('Marquee', () => {
  it('should render the marquee wrapper', () => {
    const { container } = render(() => <Marquee />)
    const wrapper = container.querySelector(`[class*="Wrapper"]`)
    expect(wrapper).toBeInTheDocument()
  })

  it('should contain list items with text', () => {
    render(() => <Marquee />)
    const listItems = screen.getAllByText('lorem ipsum')
    expect(listItems.length).toBeGreaterThan(0)
  })
})
