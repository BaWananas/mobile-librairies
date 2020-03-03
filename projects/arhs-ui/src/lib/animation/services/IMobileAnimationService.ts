import {View} from '@nativescript/core';
import {MobileAnimation} from '../models/mobile/MobileAnimation';
import {IAnimationService} from './IAnimationService';

/**
 * Implementation of {@link IAnimationService} for mobile (Nativescript) platform.
 */
export interface IMobileAnimationService extends IAnimationService<MobileAnimation, View> {
}

