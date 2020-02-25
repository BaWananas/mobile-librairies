import {Injectable} from '@angular/core';
import {View} from '@nativescript/core';
import {MobileAnimation} from '../../models/mobile/MobileAnimation';
import {IMobileAnimationService} from '../IMobileAnimationService';
import {ILoggerService, LoggerService} from '@arhs/core';

@Injectable({
  providedIn: 'root'
})
export class MobileAnimationService implements IMobileAnimationService {

  constructor(logger: LoggerService) {
    this.logger = logger;
  }

  private readonly logger: ILoggerService;

  private static createAnimationImpl<T>(type: new(...args: any[]) => T): T {
    return new type();
  }

  private static pushAnimation(animation: MobileAnimation): void {
    animation.view.isEnabled = false;
  }

  private static removeAnimation(animation: MobileAnimation): void {
    if (this.isAnimationRunning(animation)) {
      animation.view.isEnabled = true;
    }
  }

  private static isAnimationRunning(animation: MobileAnimation): boolean {
    return (!animation.view.isEnabled);
  }

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

  cancel(animation: MobileAnimation): void {
    animation.cancelled = true;
    MobileAnimationService.removeAnimation(animation);
  }

}
