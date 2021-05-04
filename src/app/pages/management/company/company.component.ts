import { Component, OnInit } from '@angular/core';
import { CompanyService } from "./company.service";
import { CompanyDto } from "../../../@core/models/dto/company-dto";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: 'ngx-company',
  templateUrl: './company.component.html',
  styleUrls: [`./company.component.scss`]
})
export class CompanyComponent implements OnInit {

  companies: CompanyDto[];

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmDelete: true,
    },
    actions: {
      edit: false,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
        addable: false,
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
        editor: {
          type: 'textarea'
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private companyService: CompanyService) { }

  onCreateConfirm(event) {
    const company: any = event.newData;

    this.companyService.postNewCompany({
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

  onDeleteConfirm(event): void {
    this.companyService.deleteCompany(event.data.id).subscribe(() => {
      event.confirm.resolve();
    })
  }

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe((res) => {
      const { data } = res;
      this.companies = data;
      this.source.load(this.companies);
    })
  }

}
