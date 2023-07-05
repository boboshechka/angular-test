import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { IUser } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  // users: IUser[] = [];

  create(user: IUser) {
    // return this.http.post('https://core.nekta.cloud/api/auth/login', this.mockForm);
    fetch('https://core.nekta.cloud/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((token) => {
        console.log('token ==>', token);
        localStorage.setItem('token', token.data.access_token);
        this.router.navigate(['/product-list']);
      });
  }
}
