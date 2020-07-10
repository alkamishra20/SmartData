import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from "src/app/authentication/services/authentication.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authentication: AuthenticationService, private router: Router) {
    this.createLoginFormGroup();
  }

  ngOnInit() {
  }
  /**
   * @desc Initializes Login Form
   */
  createLoginFormGroup(): void {
    this.loginForm = this.fb.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  /**
   * @desc login
   */
  login(): void {
    let loginPayload = {
      "email": this.loginForm.get('emailId').value,
      "password": this.loginForm.get('password').value
    }
    this.authentication.getUserDetail(loginPayload).then(data => {
      if (data && data.token) {

      }
    });

  }

}
