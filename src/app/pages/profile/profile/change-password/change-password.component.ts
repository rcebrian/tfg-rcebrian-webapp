import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  inputOldPassword: string;
  inputNewPassword: string;
  inputRepeatNewPassword: string;


  submitPassword = () => {
    // console.log(`this.inputOldPassword => ${this.inputOldPassword}`);
    // console.log(`this.inputNewPassword => ${this.inputNewPassword}`);
    // console.log(`this.inputRepeatNewPassword => ${this.inputRepeatNewPassword}`);
  }

  ngOnInit(): void {
  }

}
