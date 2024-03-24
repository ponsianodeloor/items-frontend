import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/item/overview/overview.component';
import { CreateComponent } from './components/item/create/create.component';
import { DetailComponent } from './components/item/detail/detail.component';
import { EditComponent } from './components/item/edit/edit.component';
import { DeleteComponent } from './components/item/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CreateComponent,
    DetailComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
