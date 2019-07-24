import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { SearchDataPipe } from './search-data.pipe';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './helper/jwt.interceptor';
import { ErrorInterceptor } from './helper/error.intercptor';
import { fakeBackendProvider } from './helper/fake-backend';
import { AdminComponent } from './admin/admin.component';



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
    AnimationComponent,
    SearchFilterComponent,
    SearchDataPipe,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MyOrderByPipe,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
