import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth: Boolean = true;
  constructor(private http: HttpClient) {}

  public setIsAuth = (value: Boolean) => {
    this.isAuth = value;
  };
  registerUser(body: any) {
    return this.http.post('http://localhost:3000/user/register', body);
  }
  loginUser(body: any) {
    return this.http.post('http://localhost:3000/user/login', body);
  }
}
