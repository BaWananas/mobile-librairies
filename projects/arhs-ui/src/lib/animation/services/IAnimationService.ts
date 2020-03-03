import {CustomAnimation} from '../models/CustomAnimation';

/**
 * Represent a service managing animations.
 */
export interface IAnimationService<Animation extends CustomAnimation, View> {
  /**
   * Launch an animation.
   *
   * Do everything needed to stock this animation (if the user want to cancel it).
   * @param view Animation will be applied on this view.
   * @param animation The concrete animation.
   * @param stackable Is the animation can stack with other instance of this ?
   * @returns { promise: Promise<any>, animation: Animation } Object encapsulating the animation and his promise.
   */
  animate<AnimationImpl extends Animation>(
    view: View,
    animation: new(...args: any[]) => AnimationImpl,
    stackable?: boolean): { promise: Promise<any>, animation: Animation };

  /**
   * Cancel an animation.
   * @param animation The animation you want to cancel.
   */
  cancel(animation: Animation): void;
}
