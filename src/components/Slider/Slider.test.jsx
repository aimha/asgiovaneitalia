import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import Slider from './Slider'

// Mock the SliderClass module
vi.mock('./Slider.module', () => {
  return {
    default: class MockSliderClass {
      cleanUp = vi.fn()
    },
  }
})

describe('Slider', () => {
  it('should render the slider container', () => {
    const { container } = render(() => <Slider />)
    const sliderContainer = container.querySelector(`[class*="SliderContainer"]`)
    expect(sliderContainer).toBeInTheDocument()
  })

  it('should render slider cards', () => {
    render(() => <Slider />)
    const cards = screen.getAllByRole('listitem')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('should render navigation buttons', () => {
    render(() => <Slider />)
    const startButton = screen.getByText('Start')
    expect(startButton).toBeInTheDocument()
  })
})
