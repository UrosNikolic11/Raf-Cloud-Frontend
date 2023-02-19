import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth.guard";

import {LoginComponent} from "./components/login/login.component";
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";
import {EditGuard} from "./edit.guard";
import {CreateGuard} from "./create.guard";
import {ReadGuard} from "./read.guard";
import {AllMachinesComponent} from "./components/all-machines/all-machines.component";
import {AddMachineComponent} from "./components/add-machine/add-machine.component";
import {ErrorHistoryComponent} from "./components/error-history/error-history.component";
import {SearchMachinesGuard} from "./searchMachines.guard";
import {CreateMachinesGuard} from "./createMachines.guard";


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "all-users",
    component: AllUsersComponent,
    canActivate: [AuthGuard, ReadGuard]
  },
  {
    path: "add-user",
    component: AddUserComponent,
    canActivate: [AuthGuard, CreateGuard]
  },
  {
    path: "edit-user",
    component: EditUserComponent,
    canActivate: [AuthGuard, EditGuard]
  },
  {
    path: "all-machines",
    component: AllMachinesComponent,
    canActivate: [AuthGuard, SearchMachinesGuard]
  },
  {
    path: "add-machines",
    component: AddMachineComponent,
    canActivate: [AuthGuard, CreateMachinesGuard]
  },
  {
    path: "error-history",
    component: ErrorHistoryComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
