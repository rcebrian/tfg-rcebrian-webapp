import { Component, OnInit } from '@angular/core';
import { UsersService } from "./users.service";
import { LocalDataSource } from "ng2-smart-table";
import { CompanyForm } from "../../../@core/models/form/company-form";
import { User } from "../../../@core/models/user";
import { EditUserForm } from "../../../@core/models/form/user-form";

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: [`./users.component.scss`]
})
export class UsersComponent implements OnInit {

  companies: User[];

  settings = {
    actions: {
      delete: true,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
        addable: false,
      },
      firstName: {
        title: 'Name',
        type: 'string',
      },
      lastName: {
        title: 'Lastname',
        type: 'string',
      },
      phone: {
        title: 'Phone',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      country: {
        title: 'Country',
        type: 'string',
      },
      postalCode: {
        title: 'Postal Code',
        type: 'string',
      },
      role: {
        title: 'Role',
        type: 'string',
        valuePrepareFunction: (data) =>  data.name.replace('ROLE_', '')
      },
    },
    pager: {
      perPage: 20
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private usersService: UsersService) {
    this.usersService.getAllUsers().subscribe(res => {
      const { data } = res;
      this.companies = data;
      this.source.load(this.companies);
     })
  }

  onCreateConfirm(event) {
    const company: any = event.newData;

    this.usersService.postNewCompany({
      name: company.name,
      description: company.description
    }).subscribe(res => {
      if (res.data) {
        event.newData['id'] = res.data.id;
        event.confirm.resolve(event.newData);
      } else {
        event.confirm.reject();
      }
    })
  }

  onSaveConfirm(event): void {
    const { id } = event.data;
    const editedCompany: EditUserForm = {firstName: event.newData.firstName, ...event.newData};
    this.usersService.putCompany(id, editedCompany).subscribe(() => {
      event.confirm.resolve();
    })
  }

  onDeleteConfirm(event): void {
    this.usersService.deleteCompany(event.data.id).subscribe(() => {
      event.confirm.resolve();
    })
  }

  ngOnInit(): void {
  }

}
