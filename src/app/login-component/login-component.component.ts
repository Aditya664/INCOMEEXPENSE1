import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {
  form: FormGroup;

  constructor(private authService: AuthenticationService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(32)]],
    });
  }

  onLogin(): void {
    if(this.form.valid){
      this.authService.login(this.form.get('email').value,this.form.get('password').value);
    }else{
      this.form.markAsDirty()
    }
  }
}
