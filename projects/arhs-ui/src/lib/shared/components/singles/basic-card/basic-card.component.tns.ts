import { Component, OnInit } from '@angular/core';
import {BasicCardCommon} from './basic-card.common';

// TODO
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
