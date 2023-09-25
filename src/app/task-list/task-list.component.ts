import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() taskType = ''; 

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
}
