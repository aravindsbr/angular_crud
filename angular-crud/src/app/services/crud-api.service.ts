import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudApiService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {  }

  getData(): Observable<any> {
    // return this.http.get(this.apiUrl).pipe(map(data => data));
    return this.http.get(this.apiUrl)
 }
}
