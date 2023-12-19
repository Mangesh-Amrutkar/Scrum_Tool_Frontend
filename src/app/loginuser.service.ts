import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseurl="http://localhost:6598/user/login";

  constructor(private httpClient:HttpClient) { }

  loginUser(user:User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseurl}`,user);
  }
}
