import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CreateMachineDto, MachineDto} from "../model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private httpClient: HttpClient) { }

  addMachine(name:string): Observable<CreateMachineDto>{
    let url = `http://localhost:8080/api/machines`;
    let body: CreateMachineDto = {name: name};

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      })
    };

    return this.httpClient.post<CreateMachineDto>(url, body, options);
  }

  getAllMachines(name:string, status:string, from:string, to:string): Observable<MachineDto>{

    let url = `http://localhost:8080/api/machines`;

    let queryParams = new HttpParams();
    queryParams = queryParams.append('name', name).append('status', status).append('from',from).append('to',to);

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      }),
      params: queryParams
    };

    return this.httpClient.get<MachineDto>(url, options);

  }

  startMachine(id: number): void{
    let url = `http://localhost:8080/api/machines/${id}/start`;

    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const options = {
      headers: header,
    };
    this.httpClient.put(url,null , options).subscribe(() => {
      console.log('Resource updated successfully');
    }, (error) => {
      alert(error.error);
    });

  }

  stopMachine(id: number): void{
    let url = `http://localhost:8080/api/machines/` + id + `/stop`;

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      })
    };

    this.httpClient.put(url,null, options).subscribe(() => {
      console.log('Resource updated successfully');
    }, (error) => {
      alert(error.error);
    });
  }

  restartMachine(id: number): void{
    let url = `http://localhost:8080/api/machines/` + id + `/restart`;

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      })
    };

    this.httpClient.put(url, null , options).subscribe(() => {
      console.log('Resource updated successfully');
    }, (error) => {
      alert(error.error);
    });
  }

  destroyMachine(id: number): void{
    let url = `http://localhost:8080/api/machines/`  + id;

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      })
    };

    this.httpClient.put(url,null,options).subscribe(() => {
      console.log('Resource updated successfully');
    }, (error) => {
      alert(error.error);
    });
  }

  scheduleMachine(machineId:number,action:string,date:string):void{

    let url = `http://localhost:8080/api/machines/scheduleAction`;

    let queryParams = new HttpParams();
    queryParams = queryParams.append('machineId', machineId).append('action', action).append('date',date);

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      }),
      params: queryParams
    };

    this.httpClient.post(url,null,options).subscribe(() => {
      console.log('Successfully scheduled!');
    }, (error) => {
      alert(error.error);
    });

  }

}
