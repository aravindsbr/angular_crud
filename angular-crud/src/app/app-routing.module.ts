import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ViewComponent } from './view/view.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HTMLSlicingComponent } from './html-slicing/html-slicing.component';

const routes: Routes = [
  {path:"home", component:LandingPageComponent},
  {path:"edit/:id", component:EditFormComponent},
  {path:"view/:id", component:ViewComponent},
  {path:"slicing", component:HTMLSlicingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const

RoutingComponent = [EditFormComponent, LandingPageComponent, ViewComponent];
