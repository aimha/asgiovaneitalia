import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import Homepage from './Homepage'

// Mock the state management store
vi.mock('../../data/stores/Store', () => ({
  default: {
    state: {
      hero: { title: 'Test Hero Title', claim: 'Test Claim', cta: 'Test CTA' },
      about: { title: 'Test About Title', subtitle: 'Test Subtitle', body: ['Body 1'] },
      history: { title: 'Test History Title', body: 'Test Body', dateTitle: 'Dates', dateList: [] },
      activities: { title: 'Test Activities Title', cards: [] },
      membership: {
        title: 'Test Membership Title',
        subtitle: 'Subtitle',
        body: [],
        link: '#',
        cta: 'CTA',
      },
      footer: {
        title: 'Test Footer Title',
        address: 'Address',
        cf: 'CF',
        runts: 'Runts',
        email: 'Email',
        pec: 'PEC',
      },
    },
  },
}))

// Mock the HomepageClass module
vi.mock('./Homepage.module', () => ({
  default: class MockHomepageClass {
    init = vi.fn()
  },
}))

// Mock all imported components to avoid deep mocking of their dependencies
vi.mock('../../components/Grid/Grid', () => ({
  default: () => <div>Grid</div>,
}))
vi.mock('../../components/MouseHighlight/MouseHighlight', () => ({
  default: () => <div>MouseHighlight</div>,
}))
vi.mock('../../components/Header/Header', () => ({
  default: () => <header>Header</header>,
}))
vi.mock('../../components/PageComponents/Hero/Hero', () => ({
  default: props => <div>{props.db.title}</div>,
}))
vi.mock('../../components/PageComponents/About/About', () => ({
  default: props => <div>{props.db.title}</div>,
}))
vi.mock('../../components/PageComponents/History/History', () => ({
  default: props => <div>{props.db.title}</div>,
}))
vi.mock('../../components/PageComponents/Activities/Activities', () => ({
  default: props => <div>{props.db.title}</div>,
}))
vi.mock('../../components/PageComponents/Membership/Membership', () => ({
  default: props => <div>{props.db.title}</div>,
}))
vi.mock('../../components/PageComponents/Where/Where', () => ({
  default: () => <div>Where</div>,
}))
vi.mock('../../components/PageComponents/Footer/Footer', () => ({
  default: props => <div>{props.db.title}</div>,
}))

describe('Homepage', () => {
  it('should render the homepage', () => {
    const { container } = render(() => <Homepage />)
    // Check if a component from the homepage is rendered
    const heroElement = screen.getByText('Test Hero Title')
    expect(heroElement).toBeInTheDocument()
  })

  it('should render all main sections', () => {
    render(() => <Homepage />)
    // Check for titles from different sections
    expect(screen.getByText('Test Hero Title')).toBeInTheDocument()
    expect(screen.getByText('Test About Title')).toBeInTheDocument()
    expect(screen.getByText('Test History Title')).toBeInTheDocument()
    expect(screen.getByText('Test Activities Title')).toBeInTheDocument()
    expect(screen.getByText('Test Membership Title')).toBeInTheDocument()
    expect(screen.getByText('Test Footer Title')).toBeInTheDocument()
  })
})
