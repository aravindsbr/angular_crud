import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { EditFormComponent } from './edit-form/edit-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewComponent } from './view/view.component';
import { HTMLSlicingComponent } from './html-slicing/html-slicing.component';

@NgModule({
  declarations: [
    AppComponent,
    EditFormComponent,
    LandingPageComponent,
    ViewComponent,
    HTMLSlicingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
