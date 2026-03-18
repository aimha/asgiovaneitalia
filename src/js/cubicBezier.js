/**
 * cubicBezier
 *
 * A collection of predefined cubic-bezier easing functions for animations.
 *
 * Cubic-bezier functions define the speed curve of an animation over time.
 * They control how an animation progresses from start to end, affecting the
 * perceived acceleration and deceleration of the movement.
 *
 * The four parameters (x1, y1, x2, y2) represent control points in a unit square:
 * - (x1, y1): Control point 1 - affects the start of the animation curve
 * - (x2, y2): Control point 2 - affects the end of the animation curve
 *
 * Values typically range from 0 to 1, where:
 * - 0 = start position (top-left in CSS coordinate system)
 * - 1 = end position (bottom-right in CSS coordinate system)
 */
const cubicBezier = {
  /**
   * Productive Ease In Out
   *
   * 'cubic-bezier(0.2, 0.2, 0.38, 0.9)'
   *
   * A smooth easing function that starts and ends slowly with a faster middle section.
   * Ideal for productive, functional UI elements where smoothness is prioritized
   * over expressiveness. Creates a gentle acceleration and deceleration pattern.
   */
  productiveEaseInOut: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',

  /**
   * Productive Ease In
   *
   * 'cubic-bezier(0.2, 0, 1, 0.9)'
   *
   * Starts slowly and accelerates towards the end. The second control point (1, 0.9)
   * pushes the animation towards faster completion. Best used for elements that
   * need to appear quickly but smoothly, like loading indicators.
   */
  productiveEaseIn: 'cubic-bezier(0.2, 0, 1, 0.9)',

  /**
   * Productive Ease Out
   *
   * 'cubic-bezier(0, 0, 0.38, 0.9)'
   *
   * Starts quickly and decelerates smoothly towards the end. This creates a natural
   * "settling" effect. Ideal for elements that need to arrive into position with
   * a sense of weight and stability, like cards or panels sliding in.
   */
  productiveEaseOut: 'cubic-bezier(0, 0, 0.38, 0.9)',

  /**
   * Expressive Ease In Out
   *
   * 'cubic-bezier(0.4, 0.14, 0.3, 1)'
   *
   * A more dynamic easing function with a pronounced start and end. The control
   * points create a curve that emphasizes the middle section of the animation.
   * Used for expressive UI elements that need personality and character.
   */
  expressiveEaseInOut: 'cubic-bezier(0.4, 0.14, 0.3, 1)',

  /**
   * Expressive Ease In
   *
   * 'cubic-bezier(0.4, 0.14, 1, 1)'
   *
   * Starts with a moderate pace and accelerates dramatically towards the end.
   * The control point at (1, 1) creates a sharp acceleration curve.
   * Used for elements that need to make a bold entrance.
   */
  expressiveEaseIn: 'cubic-bezier(0.4, 0.14, 1, 1)',

  /**
   * Expressive Ease Out
   *
   * 'cubic-bezier(0, 0, 0.3, 1)'
   *
   * Starts quickly and has a dramatic deceleration towards the end.
   * Creates a "bouncy" or "elastic" effect. Used for elements that
   * need to make a memorable exit or landing.
   */
  expressiveEaseOut: 'cubic-bezier(0, 0, 0.3, 1)',

  /**
   * Celebratory Ease In Out
   *
   * 'cubic-bezier(0.29, 0.04, 0.23, 1)'
   *
   * A playful, bouncy easing function with an overshoot effect.
   * The animation briefly goes beyond the target value before settling.
   * Perfect for celebratory animations like success states or achievements.
   */
  celebratoryEaseInOut: 'cubic-bezier(0.29, 0.04, 0.23, 1)',

  /**
   * Celebratory Ease In
   *
   * 'cubic-bezier(0.39, .06, 1, 1)'
   *
   * A quick, energetic start with a dramatic overshoot at the end.
   * The second control point at (1, 1) creates a sharp acceleration
   * with a playful bounce effect. Ideal for celebratory entrance animations.
   */
  celebratoryEaseIn: 'cubic-bezier(0.39, .06, 1, 1)',

  /**
   * Celebratory Ease Out
   *
   * 'cubic-bezier(0, 0, 0.3, 1)'
   *
   * Similar to expressive ease out but with a slightly different curve.
   * Starts quickly and has a dramatic deceleration. Used for celebratory
   * exit animations where a playful, bouncy effect is desired.
   */
  celebratoryEaseOut: 'cubic-bezier(0, 0, 0.3, 1)',
}

export default cubicBezier
