import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-groups',
  template: `
    <div class="row">
      <div class="col-md-12">
        <ngx-create-group></ngx-create-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ngx-tree-grid></ngx-tree-grid>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class GroupsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
