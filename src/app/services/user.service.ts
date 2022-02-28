import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrlEndPoint: string='users';
  apiUrlEndPoint1: string ='users/add';
  baseUrl: string= environment.baseUrl;


  constructor(
    private httpClient: HttpClient,
  ) { }

  addUsers(user: any): Observable<any> {
     return this.httpClient.post<any>(this.baseUrl.concat(this.apiUrlEndPoint1), user);
   }

  listAllUsers(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl.concat(this.apiUrlEndPoint));
  }

  onDelete(id: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl.concat(this.apiUrlEndPoint)}/${id}`);
}

onView(id: any): Observable<any> {
  return this.httpClient.get<any>(`${this.baseUrl.concat(this.apiUrlEndPoint)}/${id}`);
}

onEdit(id: number, user: any): Observable<any> {
  return this.httpClient.put<any>(this.baseUrl.concat(this.apiUrlEndPoint).concat('/'+ id), user);
}
}
