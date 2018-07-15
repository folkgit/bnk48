import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../models/credential';
import { Observable } from 'rxjs';
import { AuthRespone } from '../models/auth-respone';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token;
  constructor(
    private http: HttpClient,
  ) { }

  authen(credential: Credential): Observable<AuthRespone> {
    return this.http.post<AuthRespone>(`${environment.api_url}/auth/login`, credential);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
