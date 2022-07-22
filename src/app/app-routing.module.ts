import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from "./add-page/add-page.component";
import { EditPageComponent } from "./edit-page/edit-page.component";
import { ListPageComponent } from "./list-page/list-page.component";
const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: 'editDetails', component: EditPageComponent, data: { animationState: 'editDetails' } },
  { path: 'ListDetails', component: ListPageComponent, data: { animationState: 'ListDetails' } },
  { path: 'addDetails', component: AddPageComponent, data: { animationState: 'addDetails' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
