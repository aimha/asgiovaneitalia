import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import About from './About'

// Mock the AboutClass module
vi.mock('./About.module', () => {
  return {
    default: class MockAboutClass {
      init = vi.fn()
    },
  }
})

describe('About', () => {
  const mockDb = {
    title: 'Test About Title',
    subtitle: 'Test About Subtitle',
    body: ['Body 1', 'Body 2'],
  }

  it('should render the about section', () => {
    const { container } = render(() => <About db={mockDb} />)
    const aboutElement = container.querySelector('#about')
    expect(aboutElement).toBeInTheDocument()
  })

  it('should display the title from props', () => {
    render(() => <About db={mockDb} />)
    const titleElement = screen.getByText('Test About Title')
    expect(titleElement).toBeInTheDocument()
  })

  it('should display the subtitle from props', () => {
    render(() => <About db={mockDb} />)
    const subtitleElement = screen.getByText('Test About Subtitle')
    expect(subtitleElement).toBeInTheDocument()
  })
})
