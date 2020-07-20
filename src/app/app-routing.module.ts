import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './item/list/list.component';
import { DeleteComponent } from './item/delete/delete.component';
import { EditComponent } from './item/edit/edit.component';
import { AddComponent } from './item/add/add.component';

const routes: Routes = [
{path:'list',component:ListComponent},
{path:'add',component:AddComponent},
{path:'edit',component:EditComponent},
{path:"delete",component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
