import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { GroupService } from './group.service';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

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
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {

  groupId: number;
  roles: any;
  userForm: any;
  newUser: any = {};

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
    this.groupService.getRoles().subscribe(res => {
      this.roles = res.data.filter(item => item.name !== 'ROLE_ADMIN');
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

  submitNewUser = () => {
    this.groupService.createUser({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      phone: this.phone.value,
      email: this.email.value,
      address: this.address.value,
      country: this.country.value,
      postalCode: this.postalCode.value,
      password: this.password.value,
      confirmPassword: this.confirmPassword.value,
      roleId: Number(this.role.value),
      groupId: this.groupId,
    }).subscribe(res => {
      this.getTreeData();
    });
  }

  showPassword = false;
  showConfirmPassword = false;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  getInputTypeConfirm() {
    if (this.showConfirmPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
        firstName: new FormControl(this.newUser.firstName, [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        lastName: new FormControl(this.newUser.lastName, [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        phone: new FormControl(this.newUser.phone, [
          Validators.required,
          Validators.pattern('[0-9]*'),
        ]),
        email: new FormControl(this.newUser.email, [
          Validators.required,
          Validators.email,
        ]),
        address: new FormControl(this.newUser.address, [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        country: new FormControl(this.newUser.country, [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        postalCode: new FormControl(this.newUser.postalCode, [
          Validators.required,
          Validators.pattern('[0-9]{5}'),
        ]),
      password: new FormControl(this.newUser.password, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
      ]),
      confirmPassword: new FormControl(this.newUser.confirmPassword, [
        Validators.required,
        this.samePassword(),
      ]),
        role: new FormControl(this.newUser.role, [
          Validators.required,
        ]),
    });
  }
  samePassword(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (this.userForm != null) {
        if (control.value === this.userForm.value.password) {
          return null;
        }
      }
      return {'confirmPasswordIncorrect': {value: control.value}};
    };
  }

  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get phone() { return this.userForm.get('phone'); }
  get email() { return this.userForm.get('email'); }
  get address() { return this.userForm.get('address'); }
  get country() { return this.userForm.get('country'); }
  get postalCode() { return this.userForm.get('postalCode'); }
  get password() { return this.userForm.get('password'); }
  get confirmPassword() { return this.userForm.get('confirmPassword'); }
  get role() { return this.userForm.get('role'); }

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
