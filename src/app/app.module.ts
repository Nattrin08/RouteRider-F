import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageOneComponent } from './pages/home-page-one/home-page-one.component';
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageOneComponent,
    DesktopHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
