import { Injectable } from '@angular/core';
import {ILoginResult} from "../../Models/loginResult.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: string, password: string) {
    return new Promise<ILoginResult>((resolve, reject) => {
        if(username.length > 0 && password.length > 0){
          let result : ILoginResult = {loginSuccesful: true}
          resolve( result);
        }
        else {
          reject('UserName and password must have a value');
        }

    })
  }
}
