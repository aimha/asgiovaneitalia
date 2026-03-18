import { render, screen } from '@solidjs/testing-library'
import { describe, it, expect, vi } from 'vitest'
import Gallery from './Gallery'

// Mock the state management store
vi.mock('../../data/stores/Store', () => ({
  default: {
    state: {
      gallery: [
        { thumbnail_url: 'img1.jpg', title: 'Image 1' },
        { thumbnail_url: 'img2.jpg', title: 'Image 2' },
      ],
    },
  },
}))

// Mock the GalleryClass module
vi.mock('./Gallery.module', () => ({
  default: class MockGalleryClass {
    init = vi.fn()
  },
}))

describe('Gallery', () => {
  it('should render the gallery page', () => {
    const { container } = render(() => <Gallery />)
    // Check for the gallery title
    const galleryElement = container.querySelector(`[class*="GalleryContainer"]`)
    expect(galleryElement).toBeInTheDocument()
  })

  it('should render gallery items from state', () => {
    render(() => <Gallery />)
    // Check for gallery item titles
    const item1 = screen.getByText('Image 1')
    const item2 = screen.getByText('Image 2')
    expect(item1).toBeInTheDocument()
    expect(item2).toBeInTheDocument()
  })
})
