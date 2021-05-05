import { Component, Input, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from "@nebular/theme";
import { GroupsService } from "./groups.service";
import { CompanyDto } from "../../../@core/models/dto/company-dto";
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  description: string;
  kind: string;
  id?: number;
}

@Component({
  selector: 'ngx-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  companiesSelect: Array<CompanyDto>;
  groupForm: any;
  newGroup:any = {};

  companies: any;

  customColumn = 'name';
  defaultColumns = [ 'description', 'kind' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  dataSource: NbTreeGridDataSource<FSEntry>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>, private groupsService: GroupsService) {
    this.groupsService.getCompaniesTree().subscribe(res => {
      this.dataSource = this.dataSourceBuilder.create(res);
    });
  }

  submitNewGroup() {
    this.groupsService.postNewGroup({
      companyId: this.companyId.value,
      name: this.name.value,
      description: this.description.value
    }).subscribe(() => {
    })
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
    this.groupsService.getAllCompanies().subscribe((res) => {
      const { data } = res;
      this.companiesSelect = data;
    })

    this.groupForm = new FormGroup({
      name: new FormControl(this.newGroup.name, [
        Validators.required,
      ]),
      description: new FormControl(this.newGroup.description, [
        Validators.required
      ]),
      companyId: new FormControl(this.newGroup.companyId, [
        Validators.required,
      ])
    })
  }

  get name() { return this.groupForm.get('name'); }
  get description() { return this.groupForm.get('description'); }
  get companyId() { return this.groupForm.get('companyId'); }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="people-outline"></nb-icon>
    </ng-template>
  `,
})

export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'company';
  }
}
