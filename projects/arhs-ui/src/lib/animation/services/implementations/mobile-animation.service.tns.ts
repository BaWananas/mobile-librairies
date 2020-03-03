import {Injectable} from '@angular/core';
import {View} from '@nativescript/core';
import {MobileAnimation} from '../../models/mobile/MobileAnimation';
import {IMobileAnimationService} from '../IMobileAnimationService';
import {ILoggerService, LoggerService} from '@arhs/core';

/**
 * Implementation of {@link IMobileAnimationService}.
 */
@Injectable({
  providedIn: 'root'
})
export class MobileAnimationService implements IMobileAnimationService {

  /**
   * Constructor.
   * @param logger Service used for logging.
   */
  constructor(logger: LoggerService) {
    this.logger = logger;
  }

  /**
   * @ignore
   */
  private readonly logger: ILoggerService;

  /**
   * Instantiate the animation class, in order to be used.
   * @param type The animation class (e.g. {@link TapAnimation})
   * @returns T Animation object.
   */
  private static createAnimationImpl<T>(type: new(...args: any[]) => T): T {
    return new type();
  }

  /**
   * Store an animation into the service.
   *
   * Disable the subject view of the animation (needed for animation mechanisms).
   * @param animation The animation.
   */
  private static pushAnimation(animation: MobileAnimation): void {
    animation.view.isEnabled = false;
  }

  /**
   * Remove an animation from the service.
   *
   * If the animation still running, re-enable the subject view.
   * @param animation
   */
  private static removeAnimation(animation: MobileAnimation): void {
    if (this.isAnimationRunning(animation)) {
      animation.view.isEnabled = true;
    }
  }

  /**
   * Is the animation is currently running ?
   * @param animation
   */
  private static isAnimationRunning(animation: MobileAnimation): boolean {
    return (!animation.view.isEnabled);
  }

  /**
   * Refers to {@link IAnimationService}
   * @param view
   * @param animation
   * @param stackable
   */
  animate<AnimationImpl extends MobileAnimation>(view: View,
                                                 animation: new(...args: any[]) => AnimationImpl,
                                                 stackable = false): { promise: Promise<any>, animation: MobileAnimation } {
    const concreteAnimation: MobileAnimation = MobileAnimationService.createAnimationImpl<AnimationImpl>(animation);
    concreteAnimation.view = view;
    concreteAnimation.logger = this.logger;

    if (!stackable && MobileAnimationService.isAnimationRunning(concreteAnimation)) {
      this.logger.warn(this, 'Animation still running');
      return null;
    }

    if (!stackable) {
      MobileAnimationService.pushAnimation(concreteAnimation);
    }

    const animationPromise: Promise<any> = concreteAnimation.animate().then(() => {
      this.logger.debug(this, 'Remove animation.');
      MobileAnimationService.removeAnimation(concreteAnimation);
    }).catch(e => {
      this.logger.error(this, 'Error occurred during animation : ' + e);
      MobileAnimationService.removeAnimation(concreteAnimation);
    });

    return {promise: animationPromise, animation: concreteAnimation};
  }

  /**
   * Refers to {@link IAnimationService}
   * @param animation
   */
  cancel(animation: MobileAnimation): void {
    animation.cancelled = true;
    MobileAnimationService.removeAnimation(animation);
  }

}
