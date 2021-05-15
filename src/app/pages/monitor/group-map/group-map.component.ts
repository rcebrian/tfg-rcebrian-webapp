import { Component, OnInit } from '@angular/core';
import { GroupMapService } from './group-map.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-group-map',
  templateUrl: './group-map.component.html',
  styleUrls: ['./group-map.component.scss'],
})
export class GroupMapComponent implements OnInit {

  contacts;
  groupId: string;
  users: any[];

  constructor(private groups: GroupMapService, private activatedRoute: ActivatedRoute, private router: Router) { }

  getUsers(children: []): any[] {
    // @ts-ignore
    return children.map(user => {
      // @ts-ignore
      return {id: user.data.id, role: user.data.kind};
    });
  }

  navigateToUser(userId: number) {
    this.router.navigate([`/pages/users/${userId}`]).then(r => window.location.reload());
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.groupId = params.get('id');
      this.groups.getGroup(this.groupId).subscribe(res => {
        this.contacts = res[0].children;
        this.users = this.getUsers(this.contacts);
      });
    });
  }

}
