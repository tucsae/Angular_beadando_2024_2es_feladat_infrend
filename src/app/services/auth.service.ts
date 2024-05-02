import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN_KEY = 'accessToken';

  constructor(private router: Router, private jwtHelper: JwtHelperService) { }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null && this.getToken() !== undefined;
  }

  getUserId() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    console.log(token)
    if(token){
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(decodedToken)
      return decodedToken.id;
    }
    return null
}

  preventGuestAccess(): boolean {
    const isLoggedIn = this.isLoggedIn();

    if (!isLoggedIn) {
        this.router.navigateByUrl('/login');
    }

    return isLoggedIn;
}
}