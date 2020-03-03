import { Component, OnInit } from '@angular/core';
import {BasicCardCommon} from './basic-card.common';

/**
 * TODO - For future version
 * @ignore
 */
@Component({
  selector: 'arhs-ui-basic-card',
  templateUrl: './basic-card.component.tns.html',
})
export class BasicCardComponent extends BasicCardCommon implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
