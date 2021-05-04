import { Component, OnInit } from '@angular/core';
import { CompanyService } from "./company.service";
import { Company } from "../../../@core/models/company";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";

@Component({
  selector: 'ngx-company',
  templateUrl: './company.component.html',
  styleUrls: [`./company.component.scss`]
})
export class CompanyComponent implements OnInit {

  companies: Company[];

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private companyService: CompanyService, private service: SmartTableData) {
    const data = this.service.getData();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe((res) => {
      const { data } = res;
      this.companies = data;
      data.forEach(company => console.log(company))
      this.source.load(this.companies);
    })
  }

}
