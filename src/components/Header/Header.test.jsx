import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import Header from './Header'

// Mock the HeaderClass module
vi.mock('./Header.module', () => {
  return {
    default: class MockHeaderClass {
      init = vi.fn()
    },
  }
})

// Mock the Portal component to render children directly
vi.mock('solid-js', async importOriginal => {
  const actual = await importOriginal()
  return {
    ...actual,
    Portal: ({ children }) => children,
  }
})

describe('Header', () => {
  it('should render the header element', () => {
    const { container } = render(() => <Header />)
    const headerElement = container.querySelector('#header')
    expect(headerElement).toBeInTheDocument()
  })

  it('should have the correct class', () => {
    const { container } = render(() => <Header />)
    const headerElement = container.querySelector('#header')
    // Since styles are imported, we check for existence of class string
    expect(headerElement.className).toContain('Header')
  })

  it('should render menu items', () => {
    render(() => <Header />)
    // Check for one of the menu items
    const menuItem = screen.getByText('Chi Siamo')
    expect(menuItem).toBeInTheDocument()
  })
})
