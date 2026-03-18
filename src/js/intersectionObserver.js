/**
 * IntersectionObsClass
 *
 * A utility class for monitoring when elements enter the viewport using
 * the Intersection Observer API. It provides a simplified interface for
 * tracking element visibility and dispatching custom events when elements
 * become visible.
 *
 * Features:
 * - Uses the native Intersection Observer API for performance
 * - Supports custom thresholds and root margins
 * - Automatically dispatches custom "intersect" events
 * - Removes observed elements after they become visible
 * - Optional logging for debugging
 * - One-time observation (element is unobserved after intersection)
 */
export default class IntersectionObsClass {
  /**
   * Constructor
   *
   * @param {Array} target - Array of DOM elements to observe
   * @param {Object} options - Configuration options for the Intersection Observer
   *
   * This method initializes the IntersectionObsClass with target elements and
   * configuration options. It creates a custom Intersection Observer that
   * monitors when elements enter the viewport and dispatches events accordingly.
   *
   * Options:
   * - threshold: 0.25 (percentage of element visible to trigger intersection)
   * - rootMargin: '0px 0px -50px 0px' (margin around root to shrink/grow bounding box)
   * - logging: false (enable console logging for debugging)
   *
   * Processing flow:
   * 1. Store target elements
   * 2. Create custom "intersect" event
   * 3. Merge user options with defaults
   * 4. Create Intersection Observer with callback function
   * 5. Observe each target element
   */
  constructor(target = [], options = {}) {
    // Store the target elements to observe
    this.target = target

    // Create a custom event that will be dispatched when intersection occurs
    this.event = new Event('intersect')

    // Merge user options with default configuration
    this.options = {
      ...{
        threshold: 0.25, // 25% of element must be visible to trigger
        rootMargin: '0px 0px -50px 0px', // 50px margin at bottom of viewport
        logging: false, // disable logging by default
      },
      ...options,
    }

    // Create the Intersection Observer with a callback function
    this.observer = new IntersectionObserver(list => {
      // Iterate through all intersection entries
      list.forEach(el => {
        // Check if the element is currently intersecting the viewport
        if (el.isIntersecting) {
          // Dispatch the custom "intersect" event on the target element
          el.target.dispatchEvent(this.event)

          // Stop observing this element (one-time observation)
          // This prevents the event from firing multiple times
          this.observer.unobserve(el.target)

          // Log debugging information if enabled
          if (this.options.logging) {
            console.log('Event dispatched', this.event)
            console.log('Element removed.', el.target)
          }
        }
      })
    }, this.options)

    // Start observing each target element
    this.target.forEach(el => {
      this.observer.observe(el)
    })
  }
}
