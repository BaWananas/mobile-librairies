import {AnimationDefinition, View} from '@nativescript/core';
import {MobileAnimation} from '../MobileAnimation';
import {ILoggerService} from '@arhs/core';

/**
 * Represent a "Tap" animation. E.g. when tapping on element (like button, image, etc.)
 * Extends {@link MobileAnimation}.
 */
export class TapAnimation extends MobileAnimation {

  /**
   * Constructor. Refers to {@link MobileAnimation}
   * @param view
   * @param logger
   * @param duration Default: 200 Ms
   * @param iteration
   * @param delay
   * @param originX Default: 0.5 (center)
   * @param originY Default: 0.5 (center)
   */
  constructor(view: View,
              logger: ILoggerService,
              duration?: number,
              iteration?: number,
              delay?: number,
              originX?: number,
              originY?: number) {
    if (!originX) {
      originX = 0.5;
    }
    if (!originY) {
      originY = 0.5;
    }
    if (!delay) {
      delay = 0;
    }
    if (!iteration) {
      iteration = 1;
    }
    if (!duration) {
      duration = 200;
    }
    super(duration, iteration, delay, view, originX, originY, false, logger);
  }

  /**
   * Refers to {@link MobileAnimation}
   */
  animate(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      resolve(super.animate().then(() => {
        this.setOrigins();
        return this.loopAnimation(0, [this.normalAnimation(), this.reverseAnimation()]);
      }));
    });
  }

  /**
   * Generate the animation definition of tapping.
   * @returns AnimationDefinition The animation definition.
   */
  private normalAnimation(): AnimationDefinition {
    return {
      delay: this.delay,
      target: this.view,
      scale: {x: 0.6, y: 0.6},
      opacity: 0.6,
      duration: this.duration / 2,
      curve: 'easeOut',
      iterations: 1
    };
  }

  /**
   * Generate the animation definition of reverse tapping.
   * @returns AnimationDefinition The animation definition.
   */
  private reverseAnimation(): AnimationDefinition {
    return {
      target: this.view,
      scale: {x: 1, y: 1},
      opacity: 1,
      duration: this.duration / 2,
      curve: 'easeIn',
      iterations: 1
    };
  }

}
