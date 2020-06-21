import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { IOFNComponent } from './c/io-fn/io-fn.component';
import { ParentComponent } from './c/IO-FN/parent/parent.component';
import { ChildComponent } from './c/IO-FN/child/child.component';
import { ChildOutputComponent } from './c/IO-FN/child-output/child-output.component';
import { MyNgModelComponent } from './c/IO-FN/my-ng-model/my-ng-model.component';
import { NgModelPerentComponent } from './c/IO-FN/ng-model-perent/ng-model-perent.component';
import { MyNgModel3Component } from './c/IO-FN/my-ng-model3/my-ng-model3.component';

@NgModule({
  declarations: [
    AppComponent,
    IOFNComponent,
    ParentComponent,
    ChildComponent,
    ChildOutputComponent,
    MyNgModelComponent,
    NgModelPerentComponent,
    MyNgModel3Component
  ],
  imports: [
    BrowserModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
