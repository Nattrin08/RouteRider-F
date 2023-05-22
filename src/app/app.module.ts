import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core'
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';
import { AppRoutingModule } from './app-routing.module';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { DesktopFooterComponent } from './components/desktop-footer/desktop-footer.component';
import { RoutesPageTwoComponent } from './pages/routes-page-two/routes-page-two.component';
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';
import { TatacoaPageTwoOneComponent } from './pages/tatacoa-page-two-one/tatacoa-page-two-one.component';


@NgModule({
  declarations: [
    AppComponent,
    DesktopHeaderComponent,
    MobileHeaderComponent,
    DesktopFooterComponent,
    RoutesPageTwoComponent,
    MobileFooterComponent,
    TatacoaPageTwoOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
