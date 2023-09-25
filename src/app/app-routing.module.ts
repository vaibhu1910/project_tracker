import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnComponent } from './column/column.component';

const routes: Routes = [
  { path: '', redirectTo: '/column1', pathMatch: 'full' },
  { path: 'column1', component: ColumnComponent },
  { path: 'column2', component: ColumnComponent },
  { path: 'column3', component: ColumnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
