import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IOFNComponent } from './c/io-fn/io-fn.component';
import { ParentComponent } from './c/IO-FN/parent/parent.component';
import { ChildComponent } from './c/IO-FN/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    IOFNComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
