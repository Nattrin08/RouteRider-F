import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageOneComponent } from './pages/home-page-one/home-page-one.component';
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [AppComponent, HomePageOneComponent, DesktopHeaderComponent, LoginPageComponent, RegisterPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
