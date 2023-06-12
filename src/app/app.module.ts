import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommandComponent } from './command/command.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AdviceApiComponent } from './advice-api/advice-api.component';
import { PromiseTestComponent } from './promise-test/promise-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandComponent,
    SpinnerComponent,
    AdviceApiComponent,
    PromiseTestComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
