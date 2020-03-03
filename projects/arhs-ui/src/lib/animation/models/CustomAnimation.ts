/**
 * Represent a custom animation for both web and mobile platforms.
 */
export abstract class CustomAnimation {
  /**
   * Constructor.
   * @param duration Duration of the animation (in Ms).
   * @param iteration Iteration of the animation.
   * @param delay Delay before each animation starts.
   */
  protected constructor(public duration: number, public iteration: number, public delay: number) {
  }
}
