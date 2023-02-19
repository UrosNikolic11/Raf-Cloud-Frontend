import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ErrorMessageDto, MachineDto} from "../model";

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  constructor(private httpClient: HttpClient) { }

  getAllErrors(): Observable<ErrorMessageDto>{

    let url = `http://localhost:8080/api/error-history`;

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
      }),
    };

    return this.httpClient.get<ErrorMessageDto>(url, options);

  }
}
