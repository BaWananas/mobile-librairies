import {View} from '@nativescript/core';
import {MobileAnimation} from '../models/mobile/MobileAnimation';
import {IAnimationService} from './IAnimationService';

export interface IMobileAnimationService extends IAnimationService<MobileAnimation, View> {
}

