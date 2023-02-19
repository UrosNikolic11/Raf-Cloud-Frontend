import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {PasswordPipe} from "./pipes/password.pipe";
import {AppComponent} from "./components/app/app.component";
import { CustomPipe } from './pipes/custom.pipe';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AllUsersComponent } from './components/all-users/all-users.component';
import {MatTableModule} from "@angular/material/table";
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AllMachinesComponent } from './components/all-machines/all-machines.component';
import { AddMachineComponent } from './components/add-machine/add-machine.component';
import { ErrorHistoryComponent } from './components/error-history/error-history.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordPipe,
    CustomPipe,
    LoginComponent,
    AllUsersComponent,
    AddUserComponent,
    EditUserComponent,
    AllMachinesComponent,
    AddMachineComponent,
    ErrorHistoryComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
