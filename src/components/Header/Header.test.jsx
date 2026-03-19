// ============================================================
// ROLE: Header component unit tests
// DEPENDS ON: Header component, Header.module
// USED BY: Vitest test runner
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import Header from './Header'

vi.mock('./Header.module', () => {
  return {
    default: class MockHeaderClass {
      init = vi.fn()
    },
  }
})

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
    expect(headerElement.className).toContain('Header')
  })

  it('should render menu items', () => {
    render(() => <Header />)
    const menuItem = screen.getByText('Chi Siamo')
    expect(menuItem).toBeInTheDocument()
  })
})
