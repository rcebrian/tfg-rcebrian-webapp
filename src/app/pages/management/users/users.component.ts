import { Component, OnInit } from '@angular/core';
import { UsersService } from "./users.service";

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  companies: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getTreeAllCompanies().subscribe((res) => {
      const { data } = res;
      this.companies = data;
      console.log(data)
    })
  }

}
