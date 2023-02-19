import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./services/user.service";

@Injectable({
  providedIn: 'root'
})
export class StartMachinesGuard implements CanActivate {
  constructor(private service: UserService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user = this.service.currentUser.value;

    if(!user?.roles.includes('ROLE_CAN_START_MACHINES')){
      alert("No permission to start machine!");
      return false;
    }
    return true;
  }

}
