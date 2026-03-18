/**
 * AnimationClass
 *
 * A utility class for animating DOM elements using the Web Animations API.
 * It provides a simplified interface for creating complex animations with
 * support for staggered animations, custom callbacks, and style cleanup.
 *
 * Features:
 * - Uses the native Web Animations API (el.animate())
 * - Supports staggered animations across multiple elements
 * - Allows custom easing functions and timing
 * - Provides callback support upon animation completion
 * - Optionally clears inline styles after animation
 */
export default class AnimationClass {
  /**
   * Constructor
   *
   * @param {Object} defaults - User-defined default animation properties
   *
   * This method initializes the AnimationClass with default animation properties.
   * It merges user-defined defaults with built-in default values.
   *
   * Default properties:
   * - duration: 500ms (animation duration)
   * - iterations: 1 (number of times to repeat)
   * - easing: 'linear' (timing function)
   * - delay: 0 (initial delay before animation starts)
   * - fill: 'forwards' (animation fill mode - keeps end state)
   * - stagger: 0 (delay between consecutive elements)
   * - initialDelay: 0 (base delay for stagger calculations)
   * - clearProps: false (whether to clear inline styles after animation)
   * - callback: empty function (callback executed when animation completes)
   */
  constructor(defaults = {}) {
    this.defaults = {
      ...{
        duration: 500,
        iterations: 1,
        easing: 'linear',
        delay: 0,
        fill: 'forwards',
        stagger: 0,
        initialDelay: 0,
        clearProps: false,
        callback: () => {},
      },
      ...defaults,
    }
  }

  /**
   * Animate Element
   *
   * @param {Array} target - Array of DOM elements to animate
   * @param {Array} customProps - Array of CSS keyframe objects or property/value pairs
   * @param {Object} optns - Custom animation options to override defaults
   * @returns {AnimationClass} - Returns this for method chaining
   *
   * This method animates one or more DOM elements using the Web Animations API.
   * It calculates stagger delays for each element based on its index and the
   * stagger configuration, creates the animation, and sets up a completion callback.
   *
   * Processing flow:
   * 1. Merge user options with class defaults
   * 2. Iterate through target elements
   * 3. Calculate stagger delay: index * stagger + initialDelay
   * 4. Create animation using el.animate(customProps, options)
   * 5. Set up onfinish callback to handle style cleanup and custom callbacks
   * 6. Return this for method chaining
   */
  animateElement(target, customProps = [], optns = {}) {
    // Merge user options with class defaults to get final animation settings
    const options = { ...this.defaults, ...optns }

    // Iterate through each target element to apply animation
    target.forEach((el, index) => {
      // Calculate stagger delay based on element index
      // This creates a cascading animation effect across multiple elements
      options.delay = index * options.stagger + options.initialDelay

      // Create the animation using the Web Animations API
      const a = el.animate(customProps, options)

      // Set up callback when animation finishes
      a.onfinish = () => {
        // Optionally clear inline styles after animation completes
        // This prevents styles from persisting and interfering with subsequent animations
        if (!options.clearProps) {
          a.commitStyles()
        }

        // Execute custom callback function if provided
        options.callback()
      }
    })

    // Return this for method chaining (e.g., animation.animateElement(...).animateElement(...))
    return this
  }
}
