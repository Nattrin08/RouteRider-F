import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPageTwoComponent } from './pages/routes-page-two/routes-page-two.component';
import { TatacoaPageTwoOneComponent } from './pages/tatacoa-page-two-one/tatacoa-page-two-one.component';

const routes: Routes = [
  {path:'routes',component: RoutesPageTwoComponent},
  {path:'routes/desierto-tatacoa',component: TatacoaPageTwoOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
