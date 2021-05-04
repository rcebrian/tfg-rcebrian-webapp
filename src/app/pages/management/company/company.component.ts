import { Component, OnInit } from '@angular/core';
import { CompanyService } from "./company.service";
import { Company } from "../../../@core/models/company";

@Component({
  selector: 'ngx-company',
  templateUrl: './company.component.html',
  styles: [
  ]
})
export class CompanyComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe((res) => {
      const { data } = res;
      this.companies = data;
      data.forEach(company => console.log(company))
    })
  }

}
