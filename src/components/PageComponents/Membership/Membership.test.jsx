import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import Membership from './Membership'

// Mock the MembershipClass module
vi.mock('./Membership.module', () => {
  return {
    default: class MockMembershipClass {
      init = vi.fn()
    },
  }
})

describe('Membership', () => {
  const mockDb = {
    title: 'Test Membership Title',
    subtitle: 'Test Subtitle',
    body: ['Body 1', 'Body 2'],
    link: 'https://example.com',
    cta: 'Click Here',
  }

  it('should render the membership section', () => {
    const { container } = render(() => <Membership db={mockDb} />)
    const membershipElement = container.querySelector('#membership')
    expect(membershipElement).toBeInTheDocument()
  })

  it('should display the title from props', () => {
    render(() => <Membership db={mockDb} />)
    const titleElement = screen.getByText('Test Membership Title')
    expect(titleElement).toBeInTheDocument()
  })

  it('should display the CTA text', () => {
    render(() => <Membership db={mockDb} />)
    const ctaElement = screen.getByText('Click Here')
    expect(ctaElement).toBeInTheDocument()
  })
})
