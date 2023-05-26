import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPageTwoComponent } from './pages/routes-page-two/routes-page-two.component';
import { HomePageOneComponent } from  './pages/home-page-one/home-page-one.component'
import { RouteDescriptionPageComponent } from './pages/route-description-page/route-description-page.component'

const routes: Routes = [
  {path:'',component: HomePageOneComponent},
  {path:'routes',component: RoutesPageTwoComponent},
  {path:'routes/description',component: RouteDescriptionPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
