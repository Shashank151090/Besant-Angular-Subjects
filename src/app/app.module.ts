import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { ChildComponent } from './data-transfer/child/child.component';
import { ParentComponent } from './data-transfer/parent/parent.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { MyOrderByPipe } from './sort.pipe';
import { FormsModule } from '@angular/forms';
import { SubjectsComponent } from './data-transfer/subjects/subjects.component';
import { AnimationComponent } from './animation/animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataTransferComponent,
    ChildComponent,
    ParentComponent,
    CustomPipesComponent,
    MyOrderByPipe,
    SubjectsComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    routing
  ],
  providers: [MyOrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
