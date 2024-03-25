import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import {OverviewComponent} from "../../components/item/overview/overview.component";
import {CreateComponent} from "../../components/item/create/create.component";
import {DetailComponent} from "../../components/item/detail/detail.component";
import {EditComponent} from "../../components/item/edit/edit.component";
import {DeleteComponent} from "../../components/item/delete/delete.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    OverviewComponent,
    DetailComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ItemModule { }
