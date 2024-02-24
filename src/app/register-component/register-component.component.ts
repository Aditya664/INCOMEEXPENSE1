import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent {
  form: FormGroup;

  constructor(private authService: AuthenticationService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstName: [null, [Validators.required, Validators.minLength(6)]],
      lastName: [null, [Validators.required, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(32)]],
      mobileNo: [null, [Validators.required,Validators.minLength(12)]],
    });
  }

  onRegister(): void {
    if(this.form.valid){
      this.authService.register(this.form.value);
    }else{
      this.form.markAsDirty()
    }
  }
}
