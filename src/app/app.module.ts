import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';import {MatInputModule} from '@angular/material/input';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'student',component:StudentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,MatFormFieldModule,MatInputModule,
    MatButtonModule,RouterModule.forRoot(routes),
    MatToolbarModule,MatListModule,
    MatCardModule,MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
