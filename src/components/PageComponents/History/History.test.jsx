import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import History from './History'

// Mock the HistoryClass module
vi.mock('./History.module', () => {
  return {
    default: class MockHistoryClass {
      init = vi.fn()
    },
  }
})

describe('History', () => {
  const mockDb = {
    title: 'Test History Title',
    body: 'Test History Body',
    dateTitle: 'Test Date Title',
    dateList: [
      { date: '2020', body: 'Event 1' },
      { date: '2021', body: 'Event 2' },
    ],
  }

  it('should render the history section', () => {
    const { container } = render(() => <History db={mockDb} />)
    const historyElement = container.querySelector('#history')
    expect(historyElement).toBeInTheDocument()
  })

  it('should display the title from props', () => {
    render(() => <History db={mockDb} />)
    const titleElement = screen.getByText('Test History Title')
    expect(titleElement).toBeInTheDocument()
  })

  it('should render date items', () => {
    render(() => <History db={mockDb} />)
    const dateItem = screen.getByText('2020')
    expect(dateItem).toBeInTheDocument()
  })
})
