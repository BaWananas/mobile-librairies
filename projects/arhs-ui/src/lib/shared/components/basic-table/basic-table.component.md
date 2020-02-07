# Usage :

### Description :
This component represent a generic table. 
It should be implemented by any more specified table (like group-list), however it may be used without implementation.

### Instructions :
1. First, create the required inputs for the components :
    - Options, 
    - Columns, 
    - An event for refreshing the table
    - The data (Array of specified type).
    - (Optional) Specify the function which will be called when an element was selected.
    
2. After, add the html component in your template, and set the required inputs.
3. Finally, add a @ViewChild() variable corresponding to the html component, and specify the data type.

# Example :

- ### implementation.html :

```html
<arhs-ui-basic-table #component [data]="data" [columns]="componentColumns" [options]="componentOptions" [refreshEvent]="event" (onSelect)="onSelectedElement($groups: Group[])"></arhs-ui-basic-table>
```

- ### implementation.ts

```typescript
import {TableFactoryService} from '@arhs/ui'; 
import {EventEmitter,ViewChild} from '@angular/core'; 
import {Group} from '@arhs/ui'; 
import {BasicTableComponent} from '@arhs/ui';

@ViewChild('component') component: BasicTableComponent<Group>;
const event: EventEmitter<Group[]> = new EventEmitter<Group[]>();

function implementComponent(tableFactory: TableFactoryService): void {
    let data: Group[] = myService.getData();
    let componentOptions = tableFactory.getOptions<T>([...]);
    let componentColumns = tableFactory.getColumns([...])
}

function refreshTable(newElements: Group[]): void {
    event.emit(newElements);
}

function onSelectedElement(groups: Group[]) {
  // Do what you want with the groups
}
```
