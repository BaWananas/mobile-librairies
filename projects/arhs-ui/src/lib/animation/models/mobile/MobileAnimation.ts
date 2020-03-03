import {CustomAnimation} from '../CustomAnimation';
import {AnimationDefinition, View} from '@nativescript/core';
import {ILoggerService} from '@arhs/core';

/**
 * Represent a mobile animation (for Nativescript).
 * Extends {@link CustomAnimation}.
 */
export abstract class MobileAnimation extends CustomAnimation {

  /**
   * Constructor.
   * @param duration Inherit from {@link CustomAnimation}
   * @param iteration Inherit from {@link CustomAnimation}. Default value: 1
   * @param delay Inherit from {@link CustomAnimation}. Default value: 0
   * @param view Animation will be applied on this view.
   * @param originX Specify the X application point of the animation. Default value: 0
   * @param originY Specify the Y application point of the animation. Default value: 0
   * @param cancelled Is the animation was cancelled ? Default value: false
   * @param logger Service used for logging.
   */
  protected constructor(duration: number,
                        iteration = 1,
                        delay = 0,
                        public view: View,
                        public originX = 0,
                        public originY = 0,
                        public cancelled = false,
                        public logger: ILoggerService) {
    super(duration, iteration, delay);
  }

  /**
   * Launch the animation.
   * @returns Promise<void> Animation promise.
   */
  public animate(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.view.on('unloaded', args => {
        this.cancelled = true;
        this.logger.debug(this, 'Unload view component.');
        this.view.off('unloaded');
      });
      resolve();
      return;
    });
  }

  /**
   * Set the application point of the animation.
   */
  protected setOrigins(): void {
    this.view.originX = this.originX;
    this.view.originY = this.originY;
  }

  /**
   * Loop across animation iteration.
   * @param count Count used to loop across iteration.
   * @param animations The animation definitions (contains what the application will do on a view).
   * @returns Promise<void> Animation promise.
   */
  protected async loopAnimation(count: number, animations: AnimationDefinition[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.cancelled) {
        this.logger.warn(this, 'Animation cancelled.');
        resolve();
        return;
      } else {
        if (this.iteration > count) {
          count = count + 1;
          resolve(this.doAnimations(animations, 0).then(() => this.loopAnimation(count, animations)));
          return;
        } else {
          this.view.off('unloaded');
          this.logger.debug(this, 'No remaining loops; stop animation.');
          resolve();
          return;
        }
      }
    });
  }

  /**
   * Execute the animation definitions of an animation.
   * @param animations The animation definitions (contains what the application will do on a view).
   * @param index Count used to loop across definitions.
   * @returns Promise<void> Animation promise.
   */
  private async doAnimations(animations: AnimationDefinition[], index: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (index >= animations.length) {
        resolve();
        return;
      } else {
        resolve(this.view.animate(animations[index]).then(value => {
          return this.doAnimations(animations, index + 1);
        }));
        return;
      }
    });
  }
}
