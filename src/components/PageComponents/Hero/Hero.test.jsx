import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import Hero from './Hero'

// Mock the HeroClass module
vi.mock('./Hero.module', () => {
  return {
    default: class MockHeroClass {
      init = vi.fn()
    },
  }
})

describe('Hero', () => {
  const mockDb = {
    title: 'Test Title',
    claim: 'Test Claim',
    cta: 'Test CTA',
  }

  it('should render the hero section', () => {
    const { container } = render(() => <Hero db={mockDb} />)
    const heroElement = container.querySelector('#hero')
    expect(heroElement).toBeInTheDocument()
  })

  it('should display the title from props', () => {
    render(() => <Hero db={mockDb} />)
    const titleElement = screen.getByText('Test Title')
    expect(titleElement).toBeInTheDocument()
  })

  it('should display the claim from props', () => {
    render(() => <Hero db={mockDb} />)
    const claimElement = screen.getByText('Test Claim')
    expect(claimElement).toBeInTheDocument()
  })

  it('should display the cta from props', () => {
    render(() => <Hero db={mockDb} />)
    const ctaElement = screen.getByText('Test CTA')
    expect(ctaElement).toBeInTheDocument()
  })
})
