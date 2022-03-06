import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const endPoint = environment.services.api;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    const url = `${endPoint}/findall`;
    return this.http.get(url).pipe();
  } 

  insert(data: any): Observable<any> {
    const url = `${endPoint}/insert`;
    return this.http.post(url, data).pipe();
  }
}