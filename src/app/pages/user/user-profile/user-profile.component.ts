import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'ngx-user',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  mapUser: any[];

  userName: string;

  constructor(private activatedRoute: ActivatedRoute, private userProfileService: UserProfileService) {
  }

  getUserInfo(id) {
    this.userProfileService.getUserInfo(id).subscribe(res => {
      const user = res.data;
      this.userName = `${user.firstName} ${user.lastName}`;
      this.mapUser = [{id: user.id, role: user.role.name.replace('ROLE_', '')}];
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.getUserInfo(Number(params.get('id')));
    });
  }

}
