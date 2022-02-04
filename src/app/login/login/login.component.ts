import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService) {
    this.loginForm = new FormGroup({
      'username': new FormControl("",[Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)]),
      'password' : new FormControl("",[Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)])
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngOnInit(): void {

  }

  onSubmit(){
    let username  = this.loginForm.value.username
    let password = this.loginForm.value.password

   /* Just to check would take out if not debugging
    or create debugger class dependent on configuration
    which could automatically debug certain sections or
    just use webstorm and step through the code or
    use google development tools and do the same.
    */
    console.log(username);
    console.log(password);
    console.log(this.f.username.errors);

   /* Okay.. lets get a good one and bad one just for fun*/

    this.loginService.login('','').then(
      (val) => console.log(val),
      (val ) => console.log(val)
    );

    this.loginService.login(username,password).then(
      (val) => console.log(val),
      (val ) => console.log(val)
    );

  }

}
