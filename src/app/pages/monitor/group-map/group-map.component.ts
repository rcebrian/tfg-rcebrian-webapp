import { Component, OnInit } from '@angular/core';
import { GroupMapService } from './group-map.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-group-map',
  templateUrl: './group-map.component.html',
  styleUrls: ['./group-map.component.scss'],
})
export class GroupMapComponent implements OnInit {

  contacts;
  groupId: string;
  users: number[];

  constructor(private groups: GroupMapService, private activatedRoute: ActivatedRoute) { }

  getUsers(children: []): number[] {
    return children.map(user => {
      console.log(user.data.id);
      return user.data.id;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.groupId = params.get('id');
    });
    this.groups.getGroup(this.groupId).subscribe(res => {
      this.contacts = res[0].children;
      this.users = this.getUsers(this.contacts);
    });
  }

}
