import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import Footer from './Footer'

// Mock the FooterClass module
vi.mock('./Footer.module', () => {
  return {
    default: class MockFooterClass {
      init = vi.fn()
    },
  }
})

describe('Footer', () => {
  const mockDb = {
    title: 'Test Footer Title',
    address: 'Test Address',
    cf: 'Test CF',
    runts: 'Test Runts',
    email: 'Test Email',
    pec: 'Test PEC',
  }

  it('should render the footer element', () => {
    const { container } = render(() => <Footer db={mockDb} />)
    const footerElement = container.querySelector('#footer')
    expect(footerElement).toBeInTheDocument()
  })

  it('should display the title from props', () => {
    render(() => <Footer db={mockDb} />)
    const titleElement = screen.getByText('Test Footer Title')
    expect(titleElement).toBeInTheDocument()
  })

  it('should display the email from props', () => {
    render(() => <Footer db={mockDb} />)
    const emailElement = screen.getByText('Test Email')
    expect(emailElement).toBeInTheDocument()
  })
})
