import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {CreateUserDto, CurrentUser, TokenDto, UpdateUserDto, UserDto} from "../model";
import jwt_decode from "jwt-decode"
import {AddUserComponent} from "../components/add-user/add-user.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username: string;
  private password: string;
  public currentUser =  new BehaviorSubject<CurrentUser | null>(null);

  constructor(private httpClient: HttpClient) {
    this.username = '';
    this.password = '';
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(value: string) {
    this.username = value;
  }

  getPassword(): string {
    return this.password;
  }

  setToken(token: string) {

    try{
      const payload = jwt_decode(token);
      // @ts-ignore
      this.currentUser.next(new CurrentUser(payload.role, payload.sub));

    }catch{
      return;
    }

    localStorage.setItem("token", token);
  }

  getCurrentUser(): void{
    try{
      let token = localStorage.getItem("token");
      if(token != null){
        const payload = jwt_decode(token);
        // @ts-ignore
        this.currentUser.next(new CurrentUser(payload.role, payload.sub));
      }
    }catch{
      return;
    }
  }

  getAllUsers(): Observable<UserDto> {
    let url = `http://localhost:8080/api/user`;

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      })
    };

    return this.httpClient.get<UserDto>(url, options);
  }

  getUser(id: number): Observable<UserDto>{
    let url = `http://localhost:8080/api/user/${id}`;

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      })
    };

    return this.httpClient.get<UserDto>(url, options);
  }

  addUser(name: string, lastname: string, email: string, password: string, permission: string): Observable<UserDto> {
    let url = `http://localhost:8080/api/user`;
    let body: CreateUserDto = {firstName: name, lastName: lastname, email: email, password: password, roles: permission};

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      })
    };

    return this.httpClient.post<UserDto>(url, body, options);
  }

  editUser(id: number, name: string, lastname: string, permission: string): Observable<UserDto> {
    let url = `http://localhost:8080/api/user/${id}`;

    let body: UpdateUserDto = {firstName: name, lastName: lastname, roles: permission};

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      })
    };

    return this.httpClient.put<UserDto>(url, body, options);
  }

  deleteUser(id: number): Observable<Object> {
    let url = `http://localhost:8080/api/user/${id}`;

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      })
    };

    return this.httpClient.delete(url, options);
  }

  loginUser(username: string, password: string): Observable<TokenDto> {
    const url = `http://localhost:8080/api/login`;
    let body = new URLSearchParams();

    body.set('username', username);
    body.set('password', password);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.httpClient.post<TokenDto>(url, body.toString(), options);
  }

  logout(): void{
    this.currentUser.next(null);
    localStorage.removeItem("token");
  }

}
