import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  inputOldPassword: string;
  inputNewPassword: string;
  inputRepeatNewPassword: string;


  submitPassword = () => {
    console.log(`this.inputOldPassword => ${this.inputOldPassword}`)
    console.log(`this.inputNewPassword => ${this.inputNewPassword}`)
    console.log(`this.inputRepeatNewPassword => ${this.inputRepeatNewPassword}`)
  }

  ngOnInit(): void {
  }

}
