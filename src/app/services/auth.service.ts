import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname: string, pword: string) {
    if (uname === 'Amo' && pword ==='1234') {
      return 200;
    } else {
      return 403;
    }
  }

  // usually we would call API logout function to do the work (here it is simplyfied)

  logout() {
    this.router.navigate(['login']);
  }

}
