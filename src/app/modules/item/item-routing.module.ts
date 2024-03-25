import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from "../../components/item/overview/overview.component";
import { DetailComponent } from "../../components/item/detail/detail.component";
import { CreateComponent } from "../../components/item/create/create.component";
import { EditComponent } from "../../components/item/edit/edit.component";

const routes: Routes = [
  { path: '', redirectTo: 'items/overview', pathMatch: 'full'},
  { path: 'items', redirectTo: 'items/overview', pathMatch: 'full'},
  { path: 'items/overview', component: OverviewComponent},
  { path: 'items/:id/details', component: DetailComponent},
  { path: 'items/create', component: CreateComponent},
  { path: 'items/:id/edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
