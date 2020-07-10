
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { RestService } from './core/services/rest.service';


@NgModule({
  declarations: [
    AppComponent
 ],
  imports: [
    BrowserModule, CoreModule, BrowserAnimationsModule, HttpClientModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
