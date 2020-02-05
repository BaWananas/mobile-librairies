import {Input} from '@angular/core';
import {Group} from '../../../models/Group';
import {TableOptions} from '../../../../shared/models/tables/TableOptions';

export abstract class GroupsListCommon extends TableOptions<Group> {
  /**
   * Table
   */
  displayedColumns: string[] = ['id', 'associationId', 'name', 'description'];

  /**
   *  Component inputs
   */
  @Input() groups: Group[];
}
