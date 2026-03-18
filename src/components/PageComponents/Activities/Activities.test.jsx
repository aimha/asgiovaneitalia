import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import Activities from './Activities'

// Mock the ActivitiesClass module
vi.mock('./Activities.module', () => {
  return {
    default: class MockActivitiesClass {
      init = vi.fn()
    },
  }
})

describe('Activities', () => {
  const mockDb = {
    title: 'Test Activities Title',
    cards: [
      { img: 'icon1.png', title: 'Card 1', body: 'Body 1' },
      { img: 'icon2.png', title: 'Card 2', body: 'Body 2' },
    ],
  }

  it('should render the activities section', () => {
    const { container } = render(() => <Activities db={mockDb} />)
    const activitiesElement = container.querySelector('#activities')
    expect(activitiesElement).toBeInTheDocument()
  })

  it('should display the title from props', () => {
    render(() => <Activities db={mockDb} />)
    const titleElement = screen.getByText('Test Activities Title')
    expect(titleElement).toBeInTheDocument()
  })

  it('should render cards from props', () => {
    render(() => <Activities db={mockDb} />)
    const card1 = screen.getByText('Card 1')
    const card2 = screen.getByText('Card 2')
    expect(card1).toBeInTheDocument()
    expect(card2).toBeInTheDocument()
  })
})
