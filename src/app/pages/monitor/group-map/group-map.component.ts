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

  constructor(private groups: GroupMapService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.groupId = params.get('id');
    });
    this.groups.getGroup(this.groupId).subscribe(res => {
      this.contacts = res[0].children;
    });
  }

}
