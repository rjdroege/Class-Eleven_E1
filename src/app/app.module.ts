import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { greet } from './home/home.component';
import { AppComponent } from './app.component';
import { GenerateAngularComponentComponent } from './generate-angular-component/generate-angular-component.component';

@NgModule({
  declarations: [
    AppComponent,
    greet,
    GenerateAngularComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
