import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import {HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SapientUserService {

  private baseUrl = '/users/user'

  constructor(
    private http: HttpClient
  ) { }

  user$(id: string): Observable<any> {

    console.log( `SENDING REQUEST TO ${this.baseUrl} WITH ID TOKEN ${id}`);

    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      map(result => {

        console.log("RETRIEVED SAPIENTUSER INFO: ");
        console.log(result);

        return result;
      })
    )
  }
}
