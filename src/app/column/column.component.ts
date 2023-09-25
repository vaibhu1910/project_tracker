import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {
  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  // }

  todoTasks = [
    {
    id: 1,
    title: "Todo title1",
    disc: "nkjefv jehvb hv irhe vehvieruh iv"
    },
    {
    id: 2,
    title: "Todo title2",
    disc: "nkjefv jehvb hv irhe vehvieruh iv"
    },
    {
    id: 3,
    title: "Todo title3",
    disc: "nkjefv jehvb hv irhe vehvieruh iv"
    }
  ];
  inProgTasks = [
    {
    id: 1,
    title: "In Progress title1",
    disc: "nkjefv jehvb hv irhe vehvieruh iv"
    },
    {
      id: 2,
      title: "In Progress title2",
      disc: "nkjefv jehvb hv irhe vehvieruh iv"
    },
    {
      id: 3,
      title: "In Progress title3",
      disc: "nkjefv jehvb hv irhe vehvieruh iv"
    },
  ];
  doneTasks = [
    {
    id: 1,
    title: "done title1",
    disc: "nkjefv jehvb hv irhe vehvieruh iv"
    },
    {
      id: 2,
      title: "done title2",
      disc: "nkjefv jehvb hv irhe vehvieruh iv"
    },
    {
      id: 3,
      title: "done title3",
      disc: "nkjefv jehvb hv irhe vehvieruh iv"
    },
  ];
  
  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
        console.log(event.previousContainer.data + '-'+event.container.data +"-"+
        event.previousIndex+"-"+ event.currentIndex);
    }
  }

}
