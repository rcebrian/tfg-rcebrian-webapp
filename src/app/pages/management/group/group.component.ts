import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from "@nebular/theme";
import { GroupService } from "./group.service";

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  description: string;
  kind: string;
  size: number;
  id?: number;
}

@Component({
  selector: 'ngx-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groupId: number;

  customColumn = 'name';
  defaultColumns = [ 'description', 'kind', 'size'];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  dataSource: NbTreeGridDataSource<FSEntry>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private activatedRoute: ActivatedRoute,
              private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
              private groupService: GroupService) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.groupId = Number(params.get('groupId'));
      this.getTreeData();
    });
  }

  getTreeData = () => {
    this.groupService.getCompaniesTree(this.groupId).subscribe(res => {
      this.dataSource = this.dataSourceBuilder.create(res);
    });
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'ngx-user-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isUser(); else userIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #userIcon>
      <nb-icon icon="person-outline"></nb-icon>
    </ng-template>
  `,
})

export class UserIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isUser(): boolean {
    return this.kind === 'group';
  }
}
