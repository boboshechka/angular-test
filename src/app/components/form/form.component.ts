import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  mockForm = {
    email: 'demo@nekta.cloud',
    password: 'qwertyqwerty',
    personal_data_access: true
  }

  get email() {
    return this.form.controls.email as FormControl;
  }
  get password() {
    return this.form.controls.password as FormControl;
  }

  form = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {}
  submit() {
    this.loginService.create({...this.form.value, personal_data_access: true});
  }
}