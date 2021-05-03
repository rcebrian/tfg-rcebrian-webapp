import { Component, OnInit } from '@angular/core';
import { EditInfoService } from "./edit-info.service";
import { User } from "../../../../@core/models/user";

@Component({
  selector: 'ngx-edit-info',
  templateUrl: './edit-info.component.html',
  styles: [
  ]
})
export class EditInfoComponent implements OnInit {

  user: User;

  constructor(private editInfoService: EditInfoService) { }

  submit = () => {
    console.log(this.user.email);
  }

  ngOnInit(): void {
    this.editInfoService.getUserInfo().subscribe((user) => {
      this.user = user;
    })
  }

}
