import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;

  email: string = '';
  password: string = '';

  constructor (
   private auth : AuthService
   ) {

  }
  ngOnInit(): void {}

  login () {
    if(this.email === '') {
      alert('Please enter email');
      return
    }
    if(this.password === '') {
      alert('Please enter password');
      return
    }

    this.auth.login(this.email, this.password)

    this.email = '';
    this.password = '';
  }
}
