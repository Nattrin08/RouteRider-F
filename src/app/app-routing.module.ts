import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageOneComponent } from  './pages/home-page-one/home-page-one.component'

const routes: Routes = [
  {path: '', component:HomePageOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
