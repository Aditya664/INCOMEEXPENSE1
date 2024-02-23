import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationClient } from '../Services/authentication.client';
import { User } from '../Model/User';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent {
  form: FormGroup;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
      mobileNo: new FormControl(null, [Validators.required]),
    });
  }

  onRegister(): void {
    this.authService.register(this.form.value);
  }
}
